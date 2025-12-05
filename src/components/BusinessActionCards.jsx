import { Button } from "@/components/ui/button";
import { FileText, BarChart3, Download } from "lucide-react";

const actions = [
  {
    title: "Generate Report",
    description: "Create detailed sales and revenue reports",
    icon: FileText,
    buttonText: "Create Report",
    bgColor: "bg-gradient-to-br from-blue-600 to-indigo-600",
  },
  {
    title: "View Analytics",
    description: "Get AI-powered business insights",
    icon: BarChart3,
    buttonText: "View Insights",
    bgColor: "bg-gradient-to-br from-emerald-600 to-teal-600",
  },
  {
    title: "Export Data",
    description: "Download transactions and reports",
    icon: Download,
    buttonText: "Export Now",
    bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
];

export function ActionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <div
            key={action.title}
            className={`${action.bgColor} rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex flex-col h-full">
              <div className="bg-white/20 w-fit p-3 rounded-xl mb-6 backdrop-blur-sm">
                <Icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{action.title}</h3>
              <p className="text-sm text-white/90 mb-6 flex-1">{action.description}</p>

              <Button
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-0 w-full font-semibold"
              >
                {action.buttonText}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
