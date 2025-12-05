import React, { Suspense, useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Wallet,
  Receipt,
  Bell,
  BarChart3,
  FileText,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  const [showNotifications, setShowNotifications] = useState(false);
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
      className={`min-h-screen flex flex-col py-6 ${
        isDark ? "bg-dark-gray text-white" : "bg-white text-black"
      }`}
    >
      <header
        className={`sticky top-0 z-40 border-b ${
          isDark ? "border-gray-700 bg-dark-gray" : "border-slate-200 bg-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Receipt className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 rounded-full ${
                  isDark ? "hover:bg-gray-700" : "hover:bg-slate-100"
                } text-slate-500 transition-colors relative`}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 z-50">
                  <NotificationsMenu />
                </div>
              )}
            </div>

            <Avatar className="h-9 w-9 border border-slate-200 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 max-w-7xl py-8">
        {/* Page title */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">{t("dashboard")}</h1>
          <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-300">
            {t("login_welcome")}
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
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="w-full">
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
          <div className="w-full">
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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <ActionCard
            title={t("uploadReceipt")}
            description={t("uploadReceiptDescription")}
            buttonText={t("startUpload")}
            icon={Receipt}
            bgColor="bg-gradient-to-br from-blue-700 to-blue-600"
          />
          <ActionCard
            title={t("viewAnalytics")}
            description={t("viewAnalyticsDescription")}
            buttonText={t("viewReports")}
            icon={BarChart3}
            bgColor="bg-gradient-to-br from-violet-600 to-purple-600"
          />
          <ActionCard
            title={t("exportData")}
            description={t("exportDataDescription")}
            buttonText={t("exportNow")}
            icon={FileText}
            bgColor="bg-gradient-to-br from-emerald-600 to-emerald-500"
          />
        </section>
      </main>
    </div>
  );
}
