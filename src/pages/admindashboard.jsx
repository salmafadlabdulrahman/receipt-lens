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
  Users,
  Settings,
  FileSpreadsheet,
  Download,
  UserPlus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Component imports
import AdminCards from "@/components/AdminCards";
import AdminAIInsightCard from "@/components/AdminAIInsightCard";
import AdminDashboardHeader from "@/components/AdminDashboardHeader";
import AdminAction from "@/components/AdminAction";
import UsersTable from "@/components/UsersTable";
import NotificationsMenu from "@/components/NotificationsMenu";
import { useAppContext } from "@/contexts/useAppContext";

// Charts: load lazily (React.lazy)
const AdminPlatformActivityChart = React.lazy(() =>
  import("@/components/AdminPlatformActivityChart")
);
const AdminUserCategoriesChart = React.lazy(() =>
  import("@/components/AdminUserCategoriesChart")
);

export default function AdminDashboard() {
  const { theme } = useAppContext();
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-slate-50 text-slate-900"
          : "bg-dark-gray text-white"
      } min-h-screen flex flex-col font-sans pt-[5em] md:pt-[8em]`}
    >
      {/* Main content */}
      <main className="container mx-auto px-6 py-8 flex-1 max-w-7xl">
        {/* Page title */}
        <AdminDashboardHeader />

        {/* AI insight banner */}
        <div className="mb-8">
          <AdminAIInsightCard />
        </div>

        {/* Admin Stats Cards */}
        <AdminCards />

        {/* Charts row */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="h-full">
            <Suspense
              fallback={
                <div className="h-[350px] w-full rounded-xl bg-slate-100 animate-pulse" />
              }
            >
              <AdminPlatformActivityChart />
            </Suspense>
          </div>
          <div className="h-full">
            <Suspense
              fallback={
                <div className="h-[350px] w-full rounded-xl bg-slate-100 animate-pulse" />
              }
            >
              <AdminUserCategoriesChart />
            </Suspense>
          </div>
        </section>

        {/* Recent receipts table */}
        <section className="mb-8">
          <UsersTable />
        </section>

        {/* Four big action cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AdminAction
            title="Manage Users"
            description="View and manage all user accounts"
            buttonText="Open Users"
            icon={Users}
            bgColor="bg-violet-600"
          />

          <AdminAction
            title="View Analytics"
            description="Get AI-powered spending insights"
            buttonText="View Reports"
            icon={BarChart3}
            bgColor="bg-emerald-500"
          />

          <AdminAction
            title="Export Data"
            description="Download receipts and reports"
            buttonText="Export Now"
            icon={Download}
            bgColor="bg-amber-500"
          />

          <AdminAction
            title="Add New Admin"
            description="Create new administrator account"
            buttonText="Add Admin"
            icon={UserPlus}
            bgColor="bg-sky-500"
          />
        </section>
      </main>
    </div>
  );
}
