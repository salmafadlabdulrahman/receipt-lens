import { DollarSign, TrendingUp, ShoppingCart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/contexts/useAppContext";

import { DashboardHeader } from "@/components/BusinessDashboardHeader";
import { InsightBanner } from "@/components/BusinessInsightBanner";
import { MetricCard } from "@/components/BusinessMetricCard";
import { SalesTrendChart } from "@/components/BusinessSalesTrendChart";
import { ProductDistributionChart } from "@/components/BusinessProductDistributionChart";
import { RecentSalesTable } from "@/components/BusinessRecentSalesTable";
import { ActionCards } from "@/components/BusinessActionCards";

export default function BusinessDashboard() {
  const { t } = useTranslation();
  const { theme } = useAppContext();
  const isDark = theme === "dark";

  return (
    <div className={`${isDark ? "bg-dark-gray text-white" : "bg-white text-slate-900"} min-h-screen`}>
      <DashboardHeader theme={theme} />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Page Title */}
        <div>
          <h1 className={`${isDark ? "text-white" : "text-slate-900"} text-2xl font-bold`}>
            {t("businessDashboard.title")}
          </h1>
          <p className={`${isDark ? "text-slate-300" : "text-slate-500"} text-sm mt-1`}>
            {t("businessDashboard.subtitle")}
          </p>
        </div>

        {/* Insight Banner */}
        <InsightBanner theme={theme} />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title={t("businessDashboard.metrics.totalRevenue.title")}
            value="$124,580.00"
            change={t("businessDashboard.metrics.totalRevenue.change", { percent: "24%" })}
            changeType="positive"
            icon={DollarSign}
            iconBg="blue"
            theme={theme}
          />

          <MetricCard
            title={t("businessDashboard.metrics.monthlySales.title")}
            value="1,847"
            change={t("businessDashboard.metrics.monthlySales.change", { percent: "12%" })}
            changeType="positive"
            icon={ShoppingCart}
            iconBg="green"
            theme={theme}
          />

          <MetricCard
            title={t("businessDashboard.metrics.activeCustomers.title")}
            value="3,429"
            change={t("businessDashboard.metrics.activeCustomers.change", { value: "3,429" })}
            changeType="neutral"
            icon={Users}
            iconBg="purple"
            theme={theme}
          />

          <MetricCard
            title={t("businessDashboard.metrics.avgOrderValue.title")}
            value="$42,180.00"
            change={t("businessDashboard.metrics.avgOrderValue.change", { percent: "8%" })}
            changeType="positive"
            icon={TrendingUp}
            iconBg="amber"
            theme={theme}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesTrendChart theme={theme} />
          <ProductDistributionChart theme={theme} />
        </div>

        {/* Recent Sales Table */}
        <RecentSalesTable theme={theme} />

        {/* Action Cards */}
        <ActionCards theme={theme} />
      </main>
    </div>
  );
}
