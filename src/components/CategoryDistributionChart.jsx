import { Card } from "./ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useTranslation } from "react-i18next";

const CategoryDistributionChart = () => {
  const { t } = useTranslation();

  const data = [
    { name: t("dining"), value: 892.45, color: "#EF4444" },
    { name: t("transportation"), value: 450.2, color: "#3B82F6" },
    { name: t("shopping"), value: 650.8, color: "#14B8A6" },
    { name: t("business"), value: 520.3, color: "#8B5CF6" },
    { name: t("entertainment"), value: 234.67, color: "#F59E0B" },
    { name: t("other"), value: 99.0, color: "#10B981" },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          {t("categoryDistribution")}
        </h3>
        <button className="text-sm text-primary hover:text-primary/80">
          {t("viewAll")}
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-muted-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CategoryDistributionChart;
