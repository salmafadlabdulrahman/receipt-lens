import { Sparkles, X } from "lucide-react";
import { Card } from "./ui/card";
import { useTranslation } from "react-i18next";

const AdminAIInsightCard = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");

  return (

    <Card className={`bg-linear-to-r from-violet-600 to-purple-600 border-0 p-6 text-white relative overflow-hidden ${isArabic ? "text-right" : "text-left"}`}
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
          <Sparkles className="h-6 w-6 text-white" />
        </div>

        <div className="flex-1 relative">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-white/90 text-sm">
              {t("aiInsight")}
            </h3>

            <button
              className={`
                text-white/70 hover:text-white transition-colors absolute top-0
                ${isArabic ? "left-0" : "right-0"}
              `}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="text-lg font-bold mb-1 leading-tight">
            {t("aiInsightMain")}
          </p>

          <p className="text-sm text-white/80 font-medium">
            {t("aiInsightSuggestion")}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AdminAIInsightCard;
