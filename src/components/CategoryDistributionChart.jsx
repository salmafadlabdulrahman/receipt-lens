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
    <Card className="p-6 h-full flex flex-col shadow-sm border border-slate-100 rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-foreground">
          {t("categoryDistribution")}
        </h3>
        <button  className="text-sm text-indigo-600 font-medium hover:text-indigo-700 hover:underline">
          {t("viewAll")}
        </button>
      </div>
      <div className="flex-1 min-h-[200px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-slate-500">{item.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CategoryDistributionChart;
