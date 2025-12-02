import React from "react";
import { Sun, Moon } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useAppContext } from "@/contexts/useAppContext";

interface Props {
  horizontal?: boolean;
}

const LanguageThemeToggle: React.FC<Props> = ({ horizontal = false }) => {
  const { theme, setTheme } = useAppContext();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`flex ${horizontal ? "flex-row" : "items-center gap-2"}`}>
      <LanguageSwitcher />

      <button
        onClick={handleThemeToggle}
        className="p-2 rounded-full bg-muted/50 text-gray-800 dark:text-gray-200 flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default LanguageThemeToggle;
