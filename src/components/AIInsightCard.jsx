import { Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/contexts/useAppContext";

const AIInsightCard = () => {
  const { t } = useTranslation();
  const { theme } = useAppContext();

  //bg-gradient-to-r from-accent to-purple-500
  return (
    <Card
      className={`${
        theme === "light"
          ? "bg-linear-to-br from-purple-soft to-purple-light"
          : "bg-linear-to-r  from-[#0029FF] via-purple-warm to-pink-pastel"
      }  border-0 p-6 text-accent-foreground`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-5 w-5" />
          <h2
            className="font-semibold"
            style={{
              color: "var(--text-main)",
              fontFamily: "var(--font-primary)",
            }}
          >
            {t("aiInsightTitle")}
          </h2>
        </div>
        <button className="text-accent-foreground/80 hover:text-accent-foreground">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="rotate-45"
          >
            <path
              d="M8 3V13M3 8H13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <p
        className="text-lg mb-1"
        style={{
          color: "var(--text-main)",
          fontFamily: "var(--font-secondary)",
        }}
      >
        {t("aiInsightMessage1")}
      </p>
      <p
        className="text-m text-accent-foreground/90"
        style={{
          color: "var(--text-main)",
          fontFamily: "var(--font-secondary)",
        }}
      >
        {t("aiInsightMessage2")}
      </p>
    </Card>
  );
};

export default AIInsightCard;
