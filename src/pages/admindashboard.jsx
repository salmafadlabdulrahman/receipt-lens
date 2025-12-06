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
  Users,
  Settings,
  FileSpreadsheet,
  Download,
  UserPlus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

import { useAppContext } from "@/contexts/useAppContext";
import AdminCards from "@/components/AdminCards";
import AdminAIInsightCard from "@/components/AdminAIInsightCard";
import AdminDashboardHeader from "@/components/AdminDashboardHeader";
import AdminAction from "@/components/AdminAction";
import UsersTable from "@/components/UsersTable";
import NotificationsMenu from "@/components/NotificationsMenu";

const AdminPlatformActivityChart = React.lazy(() =>
  import("@/components/AdminPlatformActivityChart")
);
const AdminUserCategoriesChart = React.lazy(() =>
  import("@/components/AdminUserCategoriesChart")
);

export default function AdminDashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const { t } = useTranslation();
  const { theme } = useAppContext(); // Dark / Light Mode
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col font-sans ${
        isDark ? "bg-dark-gray text-white" : "bg-white text-slate-900"
      }`}
    >
      {/* Top header */}
      <header
        className={`sticky top-0 z-40 border-b ${
          isDark ? "bg-dark-gray border-slate-600" : "bg-white border-slate-200"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Receipt className="h-5 w-5 text-white" />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              className={`gap-1 sm:gap-2 shadow-sm ${
                isDark
                  ? "bg-indigo-700 hover:bg-indigo-600 text-white"
                  : "bg-indigo-700 hover:bg-indigo-800 text-white"
              }`}
            >
              <Plus className="h-4 w-4" />
              {t("uploadReceipt")}
            </Button>

            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 rounded-full transition-colors relative ${
                  isDark
                    ? "hover:bg-slate-700 text-slate-300"
                    : "hover:bg-slate-100 text-slate-500"
                }`}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 z-50 w-72 sm:w-80">
                  <NotificationsMenu theme={theme} />
                </div>
              )}
            </div>

            <Avatar
              className={`h-9 w-9 border cursor-pointer ${
                isDark ? "border-slate-600" : "border-slate-200"
              }`}
            >
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 flex-1 max-w-7xl">
        {/* Page title */}
        <AdminDashboardHeader theme={theme} />

        {/* AI insight banner */}
        <div className="mb-8">
          <AdminAIInsightCard theme={theme} />
        </div>

        {/* Admin Stats Cards */}
        <section className="mb-8">
          <AdminCards theme={theme} />
        </section>

        {/* Charts row */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="h-full">
            <Suspense
              fallback={
                <div
                  className={`h-[350px] w-full rounded-xl animate-pulse ${
                    isDark ? "bg-slate-700" : "bg-slate-100"
                  }`}
                />
              }
            >
              <AdminPlatformActivityChart theme={theme} />
            </Suspense>
          </div>
          <div className="h-full">
            <Suspense
              fallback={
                <div
                  className={`h-[350px] w-full rounded-xl animate-pulse ${
                    isDark ? "bg-slate-700" : "bg-slate-100"
                  }`}
                />
              }
            >
              <AdminUserCategoriesChart theme={theme} />
            </Suspense>
          </div>
        </section>

        {/* Users Table */}
        <section className="mb-8 overflow-x-auto">
          <UsersTable theme={theme} />
        </section>

        {/* Four big action cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AdminAction
            title={t("adminDashboard.manageUsers.title")}
            description={t("adminDashboard.manageUsers.description")}
            buttonText={t("adminDashboard.manageUsers.buttonText")}
            icon={Users}
            bgColor="bg-violet-600"
            theme={theme}
          />

          <AdminAction
            title={t("adminDashboard.viewAnalytics.title")}
            description={t("adminDashboard.viewAnalytics.description")}
            buttonText={t("adminDashboard.viewAnalytics.buttonText")}
            icon={BarChart3}
            bgColor="bg-emerald-500"
            theme={theme}
          />

          <AdminAction
            title={t("adminDashboard.exportData.title")}
            description={t("adminDashboard.exportData.description")}
            buttonText={t("adminDashboard.exportData.buttonText")}
            icon={Download}
            bgColor="bg-amber-500"
            theme={theme}
          />

          <AdminAction
            title={t("adminDashboard.addAdmin.title")}
            description={t("adminDashboard.addAdmin.description")}
            buttonText={t("adminDashboard.addAdmin.buttonText")}
            icon={UserPlus}
            bgColor="bg-sky-500"
            theme={theme}
          />
        </section>
      </main>
    </div>
  );
}
