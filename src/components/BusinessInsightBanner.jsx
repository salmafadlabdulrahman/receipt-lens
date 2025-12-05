import { TrendingUp, X } from "lucide-react";

export function InsightBanner() {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl p-5 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium opacity-90">Business Insight</span>
        </div>
        <p className="text-lg font-semibold mb-1">
          Revenue is up 24% this month compared to last month.
        </p>
        <p className="text-sm opacity-80">
          Your Electronics category is driving most of the growth. Consider expanding inventory.
        </p>
      </div>
      <button className="absolute top-4 right-4 opacity-60 hover:opacity-100 transition-opacity">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
