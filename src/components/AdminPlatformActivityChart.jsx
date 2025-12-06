import { useState } from "react";
import { Card } from "@/components/ui/card";

// === Imports from BOTH branches (merged without deleting anything) ===
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

import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/contexts/useAppContext";
// ======================================================================

const data = [
  { date: "Dec 9", amount: 120 },
  { date: "Dec 10", amount: 160 },
  { date: "Dec 11", amount: 180 },
  { date: "Dec 12", amount: 140 },
  { date: "Dec 13", amount: 200 },
  { date: "Dec 14", amount: 210 },
  { date: "Dec 15", amount: 240 },
];

const AdminPlatformActivityChart = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useAppContext();
  const isArabic = i18n.language.startsWith("ar");

  const periods = ["last7", "last14", "last30", "last90"];
  const [selectedPeriod, setSelectedPeriod] = useState("last7");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="p-6 shadow-sm border border-slate-500 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h3
          className={`text-lg font-semibold ${
            theme === "light" ? "text-slate-900" : "text-white"
          }`}
        >
          {t("dashboard.activityTrend")}
        </h3>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium
              text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors
              ${isArabic ? "flex-row-reverse" : ""}`}
          >
            {t(`dashboard.${selectedPeriod}`)}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div
              className={`absolute ${
                isArabic ? "left-0" : "right-0"
              } mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-lg z-10`}
            >
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => {
                    setSelectedPeriod(period);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-sm transition-colors 
                  first:rounded-t-lg last:rounded-b-lg
                  ${isArabic ? "text-right" : "text-left"} 
                  ${
                    selectedPeriod === period
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {t(`dashboard.${period}`)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorAdminAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* From both branches */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e2e8f0"
            vertical={false}
          />

          <XAxis
            dataKey="date"
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            dy={10}
          />

          <YAxis
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            domain={[0, 240]}
            ticks={[0, 60, 120, 180, 240]}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
            }}
            formatter={(value) => [value, t("dashboard.users")]}
          />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#8B5CF6"
            strokeWidth={3}
            fill="url(#colorAdminAmount)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default AdminPlatformActivityChart;
