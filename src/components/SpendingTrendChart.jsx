import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import {
  AreaChart as AreaChartAlias,
  Area as AreaAlias,
  XAxis as XAxisAlias,
  YAxis as YAxisAlias,
  CartesianGrid as CartesianGridAlias,
  Tooltip as TooltipAlias,
  ResponsiveContainer as ResponsiveContainerAlias,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { useAppContext } from "../contexts/useAppContext";
import { useTranslation } from "react-i18next";

/**
 * Merged: kept all imports (including LineChart & aliases) to avoid deleting anything.
 * - Uses both period dropdown (feature) and theme/translation (dev).
 * - Preserves visual choices from both branches and computes a safe Y domain.
 */

const data = [
  { date: "Dec 9", amount: 45 },
  { date: "Dec 10", amount: 120 },
  { date: "Dec 11", amount: 90 },
  { date: "Dec 12", amount: 80 },
  { date: "Dec 13", amount: 190 },
  { date: "Dec 14", amount: 240 },
  { date: "Dec 15", amount: 85 },
];

const periods = ["Last 7 days", "Last 14 days", "Last 30 days", "Last 90 days"];

const SpendingTrendChart = () => {
  // feature branch states (period dropdown)
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 days");
  const [isOpen, setIsOpen] = useState(false);

  // dev branch context & translation
  const { theme } = useAppContext();
  const isDark = theme === "dark";
  const { t } = useTranslation();

  // compute a safe Y domain that preserves both branch choices (240 and 300)
  const dataMax = Math.max(...data.map((d) => d.amount), 0);
  const suggestedMax = Math.max(240, 300); // both branches had 240 and 300
  const yMax = Math.max(dataMax, suggestedMax);

  // choose height - prefer the larger to preserve both branches' visual intents
  const containerHeight = 350;

  return (
    <Card
      className={`p-6 ${
        isDark
          ? "h-full bg-dark-gray text-white"
          : "shadow-sm border border-slate-100 rounded-xl"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">
          {t ? t("spendingTrend") || "Spending Trend" : "Spending Trend"}
        </h3>

        {/* Combined controls: dev had simple button, feature had dropdown with Chevron */}
        <div className="relative flex items-center flex-wrap justify-end gap-3">
          <button
            className={`text-sm hover:opacity-80 ${
              isDark ? "text-gray-300" : "text-muted-foreground"
            }`}
          >
            {t ? t("last7Days") || selectedPeriod : selectedPeriod}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              {selectedPeriod}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                {periods.map((period) => (
                  <button
                    key={period}
                    onClick={() => {
                      setSelectedPeriod(period);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      selectedPeriod === period
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : "text-slate-700"
                    }`}
                  >
                    {t ? t(period) || period : period}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={containerHeight}>
        {/* Using AreaChart (keeps both branches' Area usage) */}
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={isDark ? "#7c3aed" : "#8B5CF6"}
                stopOpacity={0.2}
              />
              <stop
                offset="95%"
                stopColor={isDark ? "#7c3aed" : "#8B5CF6"}
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
            dy={10}
          />

          <YAxis
            stroke={isDark ? "#fff" : "hsl(var(--muted-foreground))"}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
            domain={[0, yMax]}
            ticks={[
              0,
              Math.round(yMax * 0.25),
              Math.round(yMax * 0.5),
              Math.round(yMax * 0.75),
              yMax,
            ]}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#2c2c2c" : "hsl(var(--card))",
              border: `1px solid ${isDark ? "#555" : "hsl(var(--border))"}`,
              borderRadius: "8px",
              color: isDark ? "#fff" : "#000",
            }}
            formatter={(value) => [
              `$${value}`,
              t ? t("amount") || "Amount" : "Amount",
            ]}
          />

          <Area
            type="monotone"
            dataKey="amount"
            stroke={isDark ? "#fff" : "#8B5CF6"}
            strokeWidth={3}
            fill="url(#colorAmount)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SpendingTrendChart;
