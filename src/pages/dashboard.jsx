// src/pages/dashboard.jsx
import React, { Suspense, useState } from "react";
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
// klnscslknc
// Component imports
import StatCard from "@/components/StatCard";
import AIInsightCard from "@/components/AIInsightCard";
import ActionCard from "@/components/ActionCard";
import RecentReceiptsTable from "@/components/RecentReceiptsTable";
import NotificationsMenu from "@/components/NotificationsMenu";
import { NavLink } from "@/components/NavLink";

// Charts: load lazily (React.lazy)
const SpendingTrendChart = React.lazy(() =>
  import("@/components/SpendingTrendChart")
);
const CategoryDistributionChart = React.lazy(() =>
  import("@/components/CategoryDistributionChart")
);

// Mock data for StatCard
const mockStats = [
  {
    title: "Total Spend",
    value: "$2,847.32",
    change: "12% vs last month",
    isPositive: false,
    icon: DollarSign,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Receipts Scanned",
    value: "127",
    change: "8% vs last month",
    isPositive: true,
    icon: Receipt,
    bgColor: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    title: "Top Category",
    value: "Dining",
    change: "$892.45 spent",
    isPositive: true,
    icon: Wallet,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "Avg per Receipt",
    value: "$22.42",
    change: "5% vs last month",
    isPositive: false,
    icon: TrendingUp,
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

export default function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Receipt className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Spend Right
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink
                to="/"
                className="px-4 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                activeClassName="bg-indigo-50 text-indigo-600"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/receipts"
                className="px-4 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                activeClassName="bg-indigo-50 text-indigo-600"
              >
                Receipts
              </NavLink>
              <NavLink
                to="/analytics"
                className="px-4 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                activeClassName="bg-indigo-50 text-indigo-600"
              >
                Analytics
              </NavLink>
              <NavLink
                to="/subscription"
                className="px-4 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                activeClassName="bg-indigo-50 text-indigo-600"
              >
                Subscription
              </NavLink>
              <NavLink
                to="/profile"
                className="px-4 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                activeClassName="bg-indigo-50 text-indigo-600"
              >
                Profile
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white gap-2 shadow-sm">
              <Plus className="h-4 w-4" />
              Upload Receipt
            </Button>

            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors relative"
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
      <main className="container mx-auto px-6 py-8 flex-1 max-w-7xl">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">User Dashboard</h1>
          <p className="text-slate-500 mt-2">
            Welcome back! Here's your expense overview for this month.
          </p>
        </div>

        {/* AI insight banner */}
        <div className="mb-8">
          <AIInsightCard />
        </div>

        {/* Stats row */}
        <section
          aria-label="Quick stats"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {mockStats.map((s, idx) => (
            <StatCard
              key={idx}
              title={s.title}
              value={s.value}
              change={s.change}
              isPositive={s.isPositive}
              icon={s.icon}
              bgColor={s.bgColor}
              iconColor={s.iconColor}
            />
          ))}
        </section>

        {/* Charts row */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="h-full">
            <Suspense
              fallback={
                <div className="h-[350px] w-full rounded-xl bg-slate-100 animate-pulse" />
              }
            >
              <SpendingTrendChart />
            </Suspense>
          </div>
          <div className="h-full">
            <Suspense
              fallback={
                <div className="h-[350px] w-full rounded-xl bg-slate-100 animate-pulse" />
              }
            >
              <CategoryDistributionChart />
            </Suspense>
          </div>
        </section>

        {/* Recent receipts table */}
        <section className="mb-8">
          <RecentReceiptsTable />
        </section>

        {/* Three big action cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ActionCard
            title="Upload New Receipt"
            description="Scan and categorize instantly with AI"
            buttonText="Start Upload"
            icon={Receipt}
            bgColor="bg-gradient-to-br from-blue-700 to-blue-600"
          />

          <ActionCard
            title="View Analytics"
            description="Get AI-powered spending insights"
            buttonText="View Reports"
            icon={BarChart3}
            bgColor="bg-gradient-to-br from-violet-600 to-purple-600"
          />

          <ActionCard
            title="Export Data"
            description="Download receipts and reports"
            buttonText="Export Now"
            icon={FileText}
            bgColor="bg-gradient-to-br from-emerald-600 to-emerald-500"
          />
        </section>
      </main>
    </div>
  );
}
