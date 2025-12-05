import { Sparkles, X } from "lucide-react";
import { Card } from "./ui/card";

const AdminAIInsightCard = () => {
  return (
    <Card className="bg-gradient-to-r from-violet-600 to-purple-600 border-0 p-6 text-white relative overflow-hidden">
      <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-white/90 text-sm">AI Insight</h3>
            <button className="text-white/70 hover:text-white transition-colors absolute top-4 right-4">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-lg font-bold mb-1 leading-tight">
            User activity increased by 18% this week. Highest engagement comes from new users in the Shopping category.
          </p>
          <p className="text-sm text-white/80 font-medium">
            Consider launching a promotional campaign targeting Transportation category to boost engagement.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AdminAIInsightCard;
