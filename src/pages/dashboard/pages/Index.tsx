import Navbar from "@/components/Navbar";
import AIInsightCard from "@/components/AIInsightCard";
import StatCard from "@/components/StatCard";
import SpendingTrendChart from "@/components/SpendingTrendChart";
import CategoryDistributionChart from "@/components/CategoryDistributionChart";
import RecentReceiptsTable from "@/components/RecentReceiptsTable";
import ActionCard from "@/components/ActionCard";
import { DollarSign, Receipt, Utensils, BarChart3, Upload, LineChart, Download } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your expense overview for this month.
          </p>
        </div>

        {/* AI Insight */}
        <div className="mb-6">
          <AIInsightCard />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Spend"
            value="$2,847.32"
            change="12% vs last month"
            isPositive={true}
            icon={DollarSign}
            bgColor="bg-stat-green-bg"
            iconColor="text-stat-green"
          />
          <StatCard
            title="Receipts Scanned"
            value="127"
            change="8% vs last month"
            isPositive={true}
            icon={Receipt}
            bgColor="bg-stat-blue-bg"
            iconColor="text-stat-blue"
          />
          <StatCard
            title="Top Category"
            value="Dining"
            change="$892.45 spent"
            isPositive={false}
            icon={Utensils}
            bgColor="bg-stat-orange-bg"
            iconColor="text-stat-orange"
          />
          <StatCard
            title="Avg per Receipt"
            value="$22.42"
            change="5% vs last month"
            isPositive={false}
            icon={BarChart3}
            bgColor="bg-stat-purple-bg"
            iconColor="text-stat-purple"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SpendingTrendChart />
          <CategoryDistributionChart />
        </div>

        {/* Recent Receipts Table */}
        <div className="mb-8">
          <RecentReceiptsTable />
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            title="Upload New Receipt"
            description="Scan and categorize instantly with AI"
            buttonText="Start Upload"
            icon={Upload}
            bgColor="bg-primary"
          />
          <ActionCard
            title="View Analytics"
            description="Get AI-powered spending insights"
            buttonText="View Reports"
            icon={LineChart}
            bgColor="bg-accent"
          />
          <ActionCard
            title="Export Data"
            description="Download receipts and reports"
            buttonText="Export Now"
            icon={Download}
            bgColor="bg-success"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
