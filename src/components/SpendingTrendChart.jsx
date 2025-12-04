import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAppContext } from "../contexts/useAppContext";
import { useTranslation } from "react-i18next";

const data = [
  { date: "Dec 9", amount: 50 },
  { date: "Dec 10", amount: 120 },
  { date: "Dec 11", amount: 180 },
  { date: "Dec 12", amount: 150 },
  { date: "Dec 13", amount: 220 },
  { date: "Dec 14", amount: 280 },
  { date: "Dec 15", amount: 90 },
];

const SpendingTrendChart = () => {
  const { theme } = useAppContext();
  const isDark = theme === "dark";
  const { t } = useTranslation();

  return (
    <Card className={`p-6 py-18 ${isDark ? "bg-dark-gray text-white" : ""}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">
          {t("spendingTrend")}
        </h3>
        <button className={`text-sm hover:opacity-80 ${isDark ? "text-gray-300" : "text-muted-foreground"}`}>
          {t("last7Days")}
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300} className={'py-8'} >
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={isDark ? "#7c3aed" : "hsl(231, 48%, 38%)"}
                stopOpacity={0.2}
              />
              <stop
                offset="95%"
                stopColor={isDark ? "#7c3aed" : "hsl(231, 48%, 38%)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDark ? "#555" : "hsl(var(--border))"}
            vertical={false}
          />
          <XAxis
            dataKey="date"
            stroke={isDark ? "#fff" : "hsl(var(--muted-foreground))"}
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke={isDark ? "#fff" : "hsl(var(--muted-foreground))"}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#2c2c2c" : "hsl(var(--card))",
              border: `1px solid ${isDark ? "#555" : "hsl(var(--border))"}`,
              borderRadius: "8px",
              color: isDark ? "#fff" : "#000",
            }}
          />
          <Area
            type="monotone"
            dataKey="amount"
            stroke={isDark ? "#fff" : "hsl(231, 48%, 38%)"}
            strokeWidth={2}
            fill="url(#colorAmount)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SpendingTrendChart;
