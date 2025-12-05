import React, { Suspense } from "react";
import {
  DollarSign,
  TrendingUp,
  Wallet,
  Receipt,
  Bell,
  Plus,
  BarChart3,
  FileText,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import StatCard from "@/components/StatCard";
import AIInsightCard from "@/components/AIInsightCard";
import ActionCard from "@/components/ActionCard";
import RecentReceiptsTable from "@/components/RecentReceiptsTable";
import NotificationsMenu from "@/components/NotificationsMenu";
import { useAppContext } from "../contexts/useAppContext";
import { useTranslation } from "react-i18next";

const SpendingTrendChart = React.lazy(() =>
  import("@/components/SpendingTrendChart")
);
const CategoryDistributionChart = React.lazy(() =>
  import("@/components/CategoryDistributionChart")
);

export default function Dashboard() {
  // const [showNotifications, setShowNotifications] = useState(false);
  const { theme } = useAppContext();
  const isDark = theme === "dark";

  const { t } = useTranslation();

  const mockStats = [
    {
      title: t("totalSpend"),
      value: "$2,847.32",
      change: t("totalSpendChange", { percent: "12%" }),
      isPositive: false,
      icon: DollarSign,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: t("receiptsScanned"),
      value: "127",
      change: t("receiptsChange", { percent: "8%" }),
      isPositive: true,
      icon: Receipt,
      bgColor: "bg-sky-50",
      iconColor: "text-sky-600",
    },
    {
      title: t("topCategory"),
      value: t("dining"),
      change: t("topCategoryChange", { amount: "$892.45" }),
      isPositive: true,
      icon: Wallet,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: t("avgPerReceipt"),
      value: "$22.42",
      change: t("avgPerReceiptChange", { percent: "5%" }),
      isPositive: false,
      icon: TrendingUp,
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDark ? "py-6 bg-dark-gray text-white" : "bg-white text-slate-900"
      } font-sans`}
    >
      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 max-w-7xl py-8 mt-[6em]">
        {/* Page title */}
        <div className={isDark ? "mb-6" : "mb-8"}>
          <h1
            className={
              isDark
                ? "text-2xl sm:text-3xl font-bold"
                : "text-3xl font-bold text-slate-900"
            }
          >
            {t ? t("dashboarduser") || "User Dashboard" : "User Dashboard"}
          </h1>
          <p
            className={
              isDark
                ? "mt-1 text-sm sm:text-base text-gray-300"
                : "text-slate-500 mt-2"
            }
          >
            {t
              ? t("welcomeMessage") ||
                "Welcome back! Here's your expense overview for this month."
              : "Welcome back! Here's your expense overview for this month."}
          </p>
        </div>
        {/* AI insight banner */}
        <div className="mb-6">
          <AIInsightCard />
        </div>
        {/* Stats row */}
        <section
          aria-label="Quick stats"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          {mockStats.map((s, idx) => (
            <StatCard key={idx} {...s} />
          ))}
        </section>
        {/* Charts row */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="w-full h-full">
            <Suspense
              fallback={
                <div
                  className={`w-full h-64 sm:h-80 md:h-96 rounded-xl animate-pulse ${
                    isDark ? "bg-gray-700" : "bg-slate-100"
                  }`}
                />
              }
            >
              <SpendingTrendChart />
            </Suspense>
          </div>

          <div className="w-full h-full">
            <Suspense
              fallback={
                <div
                  className={`w-full h-64 sm:h-80 md:h-96 rounded-xl animate-pulse ${
                    isDark ? "bg-gray-700" : "bg-slate-100"
                  }`}
                />
              }
            >
              <CategoryDistributionChart />
            </Suspense>
          </div>
        </section>
        {/* Recent receipts table */}
        <section className="mb-6 overflow-x-auto">
          <RecentReceiptsTable />
        </section>
        {/* Action cards */}
        {/* Action cards */}{" "}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 ">
          {" "}
          <ActionCard
            titleKey="uploadReceiptuser"
            descriptionKey="uploadReceiptDescription"
            buttonTextKey="startUpload"
            icon={Receipt}
            bgColor="bg-gradient-to-br from-blue-700 to-blue-600"
          />{" "}
          <ActionCard
            titleKey="viewAnalytics"
            descriptionKey="viewAnalyticsDescription"
            buttonTextKey="viewReports"
            icon={BarChart3}
            bgColor="bg-gradient-to-br from-violet-600 to-purple-600"
          />{" "}
          <ActionCard
            titleKey="exportData"
            descriptionKey="exportDataDescription"
            buttonTextKey="exportNow"
            icon={FileText}
            bgColor="bg-gradient-to-br from-emerald-600 to-emerald-500"
          />{" "}
        </section>
      </main>
    </div>
  );
}
