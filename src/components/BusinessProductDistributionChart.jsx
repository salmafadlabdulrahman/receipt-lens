import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/contexts/useAppContext";

export function ProductDistributionChart() {
  const { t } = useTranslation();
  const { theme } = useAppContext();

  const data = [
    {
      name: t("productDistribution.categories.electronics"),
      value: 35,
      color: "#6366f1",
    },
    {
      name: t("productDistribution.categories.clothing"),
      value: 25,
      color: "#10b981",
    },
    {
      name: t("productDistribution.categories.homeGarden"),
      value: 20,
      color: "#f59e0b",
    },
    {
      name: t("productDistribution.categories.sports"),
      value: 12,
      color: "#8b5cf6",
    },
    {
      name: t("productDistribution.categories.other"),
      value: 8,
      color: "#64748b",
    },
  ];

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-white border border-slate-200"
          : "bg-dark-gray border border-slate-500"
      } rounded-xl p-3 sm:p-5 shadow-sm`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`${
            theme === "light" ? "text-slate-900" : "text-white"
          } text-base sm:text-lg font-semibold`}
        >
          {t("productDistribution.title")}{" "}
        </h3>
        <button className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-700 font-medium">
          {t("productDistribution.viewAll")}
        </button>
      </div>
      <div className="h-[280px] sm:h-[300px] w-full overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
              formatter={(value) => [
                `${value}%`,
                t("productDistribution.share"),
              ]}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconSize={10}
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: "10px",
              }}
              formatter={(value) => (
                <span className="text-xs sm:text-sm text-slate-600">
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
