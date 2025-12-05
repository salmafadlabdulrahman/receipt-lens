import { DollarSign, TrendingUp, ShoppingCart, Users } from "lucide-react";
import { DashboardHeader } from "@/components/BusinessDashboardHeader";
import { InsightBanner } from "@/components/BusinessInsightBanner";
import { MetricCard } from "@/components/BusinessMetricCard";
import { SalesTrendChart } from "@/components/BusinessSalesTrendChart";
import { ProductDistributionChart } from "@/components/BusinessProductDistributionChart";
import { RecentSalesTable } from "@/components/BusinessRecentSalesTable";
import { ActionCards } from "@/components/BusinessActionCards";

export default function BusinessDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Business Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">
            Welcome back! Here's your business overview for this month.
          </p>
        </div>

        {/* Insight Banner */}
        <InsightBanner />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Revenue"
            value="$124,580.00"
            change="↑ 24% vs last month"
            changeType="positive"
            icon={DollarSign}
            iconBg="blue"
          />
          <MetricCard
            title="Monthly Sales"
            value="1,847"
            change="↑ 12% vs last month"
            changeType="positive"
            icon={ShoppingCart}
            iconBg="green"
          />
          <MetricCard
            title="Active Customers"
            value="3,429"
            change="last save this month"
            changeType="neutral"
            icon={Users}
            iconBg="purple"
          />
          <MetricCard
            title="Avg Order Value"
            value="$42,180.00"
            change="↑ 8% vs last month"
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
