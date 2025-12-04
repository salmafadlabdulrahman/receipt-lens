# PowerShell script to convert all TSX files to JSX
Write-Host "Starting TSX to JSX conversion..." -ForegroundColor Green

# Get all .tsx files in src directory
$tsxFiles = Get-ChildItem -Path ".\src" -Filter "*.tsx" -Recurse
Write-Host "Found $($tsxFiles.Count) TSX files to convert`n" -ForegroundColor Cyan

$converted = 0

foreach ($file in $tsxFiles) {
    try {
        Write-Host "[$($converted + 1)/$($tsxFiles.Count)] Processing: $($file.Name)" -ForegroundColor Yellow
        
        # Read file content
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        
        # Remove TypeScript-specific syntax
        
        # 1. Remove 'type' from imports: import { type VariantProps } -> import { VariantProps }
        $content = $content -replace ',\s*type\s+(\w+)', ', $1'
        $content = $content -replace 'import\s*\{\s*type\s+(\w+)', 'import { $1'
        
        # 2. Remove interface declarations
        $content = $content -replace '(?ms)export\s+interface\s+\w+[^{]*\{[^}]*\}', ''
        $content = $content -replace '(?ms)^interface\s+\w+[^{]*\{[^}]*\}', ''
        
        # 3. Remove generic type parameters from React.forwardRef
        $content = $content -replace 'React\.forwardRef<[^>]+>', 'React.forwardRef'
        
        # 4. Remove type annotations from function parameters
        $content = $content -replace '(\w+)\s*:\s*[^,)=]+([,)])', '$1$2'
        
        # 5. Remove return type annotations
        $content = $content -replace '\)\s*:\s*[^{=>\n]+\s*=>', ') =>'
        $content = $content -replace '\)\s*:\s*[^{=>\n]+\s*\{', ') {'
        
        # 6. Remove variable type annotations
        $content = $content -replace '(const|let|var)\s+(\w+)\s*:\s*[^=]+=', '$1 $2 ='
        
        # 7. Remove type-only exports
        $content = $content -replace '(?m)^export\s+type\s+\{[^}]+\};?\s*$', ''
        
        # 8. Remove duplicate blank lines
        $content = $content -replace '(\r?\n){3,}', "`r`n`r`n"
        
        # 9. Remove duplicate export statements
        $lines = $content -split "`r?`n"
        $seenExports = @{}
        $filteredLines = @()
        
        foreach ($line in $lines) {
            if ($line -match '^export\s+\{[^}]+\}') {
                $normalized = $line -replace '\s+', ' '
                if (-not $seenExports.ContainsKey($normalized)) {
                    $seenExports[$normalized] = $true
                    $filteredLines += $line
                }
            } else {
                $filteredLines += $line
            }
        }
        
        $content = $filteredLines -join "`r`n"
        
        # Trim trailing whitespace
        $content = $content.TrimEnd()
        
        # Create new .jsx file
        $newPath = $file.FullName -replace '\.tsx$', '.jsx'
        Set-Content -Path $newPath -Value $content -Encoding UTF8 -NoNewline
        
        # Remove old .tsx file
        Remove-Item -Path $file.FullName -Force
        
        $converted++
        Write-Host "  ✓ Converted to .jsx" -ForegroundColor Green
    }
    catch {
        Write-Host "  ✗ Error: $_" -ForegroundColor Red
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Conversion complete!" -ForegroundColor Green
Write-Host "Converted: $converted/$($tsxFiles.Count) files" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan
