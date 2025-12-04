import { Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const AIInsightCard = () => {
  return (
    <Card className="bg-gradient-to-r from-accent to-purple-500 border-0 p-6 text-accent-foreground">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-5 w-5" />
          <h3 className="font-semibold">AI Insight</h3>
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
      <p className="text-lg mb-1">
        You spent 30% more on dining this month compared to last month.
      </p>
      <p className="text-sm text-accent-foreground/90">
        Consider setting a dining budget to better manage your expenses.
      </p>
    </Card>
  );
};

export default AIInsightCard;
