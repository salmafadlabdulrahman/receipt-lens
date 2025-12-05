import { Card } from "@/components/ui/card";

const StatCard = ({ title, value, change, isPositive, icon, bgColor, iconColor }) => {
  const Icon = icon;
  return (
    <Card className="p-6 shadow-sm border border-slate-100 rounded-xl hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-slate-500 font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">{value}</h3>
          <p className={`text-sm font-medium flex items-center gap-1 ${isPositive ? "text-emerald-600" : "text-red-600"}`}>
            <span>{isPositive ? "↑" : "↓"}</span>
            {change}
          </p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgColor} flex-shrink-0`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
