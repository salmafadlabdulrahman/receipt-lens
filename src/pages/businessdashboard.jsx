import { DollarSign, TrendingUp, ShoppingCart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DashboardHeader } from "@/components/BusinessDashboardHeader";
import { InsightBanner } from "@/components/BusinessInsightBanner";
import { MetricCard } from "@/components/BusinessMetricCard";
import { SalesTrendChart } from "@/components/BusinessSalesTrendChart";
import { ProductDistributionChart } from "@/components/BusinessProductDistributionChart";
import { RecentSalesTable } from "@/components/BusinessRecentSalesTable";
import { ActionCards } from "@/components/BusinessActionCards";

export default function BusinessDashboard() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {t("businessDashboard.title")}
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            {t("businessDashboard.subtitle")}
          </p>  
        </div>

        {/* Insight Banner */}
        <InsightBanner />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title={t("businessDashboard.metrics.totalRevenue.title")}
            value="$124,580.00"
            change={t("businessDashboard.metrics.totalRevenue.change", {
              percent: "24%",
            })}
            changeType="positive"
            icon={DollarSign}
            iconBg="blue"
          />

          <MetricCard
            title={t("businessDashboard.metrics.monthlySales.title")}
            value="1,847"
            change={t("businessDashboard.metrics.monthlySales.change", {
              percent: "12%",
            })}
            changeType="positive"
            icon={ShoppingCart}
            iconBg="green"
          />

          <MetricCard
            title={t("businessDashboard.metrics.activeCustomers.title")}
            value="3,429"
            change={t("businessDashboard.metrics.activeCustomers.change", {
              value: "3,429",
            })}
            changeType="neutral"
            icon={Users}
            iconBg="purple"
          />

          <MetricCard
            title={t("businessDashboard.metrics.avgOrderValue.title")}
            value="$42,180.00"
            change={t("businessDashboard.metrics.avgOrderValue.change", {
              percent: "8%",
            })}
            changeType="positive"
            icon={TrendingUp}
            iconBg="amber"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesTrendChart />
          <ProductDistributionChart />
        </div>

        {/* Recent Sales Table */}
        <RecentSalesTable />

        {/* Action Cards */}
        <ActionCards />
      </main>
    </div>
  );
}
