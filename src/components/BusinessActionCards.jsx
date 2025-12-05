import { Button } from "@/components/ui/button";
import { FileText, BarChart3, Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const actions = [
  {
    titleKey: "actions.generateReport.title", 
    descriptionKey: "actions.generateReport.description",
    icon: FileText,
    buttonTextKey: "actions.generateReport.button",
    bgColor: "bg-gradient-to-br from-blue-600 to-indigo-600",
  },
  {
    titleKey: "actions.viewAnalytics.title",
    descriptionKey: "actions.viewAnalytics.description",
    icon: BarChart3,
    buttonTextKey: "actions.viewAnalytics.button",
    bgColor: "bg-gradient-to-br from-emerald-600 to-teal-600",
  },
  {
    titleKey: "actions.exportData.title",
    descriptionKey: "actions.exportData.description",
    icon: Download,
    buttonTextKey: "actions.exportData.button",
    bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
];

export function ActionCards() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <div
            key={action.titleKey}
            className={`${action.bgColor} rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex flex-col h-full">
              <div className="bg-white/20 w-fit p-3 rounded-xl mb-6 backdrop-blur-sm">
                <Icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-2">{t(action.titleKey)}</h3>
              <p className="text-sm text-white/90 mb-6 flex-1">
                {t(action.descriptionKey)}
              </p>

              <Button
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-0 w-full font-semibold"
              >
                {t(action.buttonTextKey)}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}