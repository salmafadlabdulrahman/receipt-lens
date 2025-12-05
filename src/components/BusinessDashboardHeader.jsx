import { Button } from "@/components/ui/button";
import { BarChart3, FileText, Settings, Bell } from "lucide-react";

const navItems = [
  { label: "Dashboard", active: true },
  { label: "Sales", active: false },
  { label: "Analytics", active: false },
  { label: "Reports", active: false },
  { label: "Settings", active: false },
];

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg text-slate-900">BizMetrics</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900">
            <Bell className="w-5 h-5" />
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
