import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

const StatCard = ({ title, value, change, isPositive, icon: Icon, bgColor, iconColor }: StatCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-foreground">{value}</h3>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgColor}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
      <p className={`text-sm flex items-center gap-1 ${isPositive ? "text-success" : "text-destructive"}`}>
        <span>{isPositive ? "↑" : "↓"}</span>
        {change}
      </p>
    </Card>
  );
};

export default StatCard;
