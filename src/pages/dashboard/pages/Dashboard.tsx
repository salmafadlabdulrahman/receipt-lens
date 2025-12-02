import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import SpendingTrendChart from "@/components/SpendingTrendChart";
import CategoryDistributionChart from "@/components/CategoryDistributionChart";
import RecentReceiptsTable from "@/components/RecentReceiptsTable";
import { DollarSign, Receipt, Utensils, BarChart3 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your receipts and spending.
          </p>
        </div>

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SpendingTrendChart />
          <CategoryDistributionChart />
        </div>

        <div className="mb-8">
          <RecentReceiptsTable />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
