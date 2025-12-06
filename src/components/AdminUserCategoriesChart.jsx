import { useAppContext } from "@/contexts/useAppContext";
import { Card } from "./ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useTranslation } from "react-i18next";

const data = [
  { name: "shopping", value: 35, color: "#8B5CF6" },
  { name: "transportation", value: 25, color: "#06B6D4" },
  { name: "dining", value: 20, color: "#F97316" },
  { name: "business", value: 15, color: "#10B981" },
  { name: "entertainment", value: 5, color: "#3B82F6" },
];

const AdminUserCategoriesChart = () => {
  const { t } = useTranslation();
  const { theme } = useAppContext();

  return (
    <Card className="p-6 h-full flex flex-col shadow-sm rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <h3
          className={`text-lg font-semibold ${
            theme === "light" ? "text-slate-900" : "text-white"
          }`}
        >
          {t("dashboardAdmin.userCategoriesDistribution")}
        </h3>
        <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700 hover:underline">
          {t("dashboardAdmin.viewAll")}
        </button>
      </div>

      {/* Chart */}
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

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-slate-500">
              {t(`dashboardAdmin.categories.${item.name}`)}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AdminUserCategoriesChart;
