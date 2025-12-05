import React, { useMemo, useState, useRef } from "react";
import SmartFinancilelAdvisor from "../components/SmartFinancialAdvisor.jsx";
import { useAppContext } from "../contexts/useAppContext";
import { useTranslation } from "react-i18next";
// Receipts.jsx - Functional TailwindCSS page
// Self-contained mock implementation with filtering, pagination and computed stats.

const MOCK_RECEIPTS = [
  {
    id: 1,
    merchant: "Starbucks Coffee",
    desc: "Downtown Branch",
    date: "2025-01-15",
    total: 12.5,
    category: "Food & Dining",
  },
  {
    id: 2,
    merchant: "Uber Ride",
    desc: "Trip to Office",
    date: "2025-11-11",
    total: 18.75,
    category: "Transport",
  },
  {
    id: 3,
    merchant: "Amazon",
    desc: "Office Supplies",
    date: "2025-01-13",
    total: 45.99,
    category: "Shopping",
  },
  {
    id: 4,
    merchant: "Netflix",
    desc: "Monthly Subscription",
    date: "2025-01-12",
    total: 15.99,
    category: "Entertainment",
  },
  {
    id: 5,
    merchant: "Shell Gas Station",
    desc: "Fuel Purchase",
    date: "2025-01-11",
    total: 52.3,
    category: "Transport",
  },
  {
    id: 6,
    merchant: "Domino's Pizza",
    desc: "Delivery Order",
    date: "2025-01-10",
    total: 28.45,
    category: "Food & Dining",
  },
  {
    id: 7,
    merchant: "Chipotle",
    desc: "Lunch",
    date: "2024-12-25",
    total: 11.8,
    category: "Food & Dining",
  },
  {
    id: 8,
    merchant: "Lyft",
    desc: "Airport Ride",
    date: "2024-12-20",
    total: 36.2,
    category: "Transport",
  },
  {
    id: 9,
    merchant: "Apple Store",
    desc: "Cable",
    date: "2024-11-02",
    total: 9.99,
    category: "Shopping",
  },
  {
    id: 10,
    merchant: "Whole Foods",
    desc: "Groceries",
    date: "2025-01-05",
    total: 62.4,
    category: "Shopping",
  },
];

const CATEGORIES = [
  "All Categories",
  "Food & Dining",
  "Transport",
  "Shopping",
  "Entertainment",
];
const DATE_RANGES = ["Last 7 Days", "Last 30 Days", "Last 90 Days", "All Time"];

function formatCurrency(n) {
  return `$${n.toFixed(2)}`;
}

function parseISODate(d) {
  return new Date(d + "T00:00:00");
}

export default function Receipts() {
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [category, setCategory] = useState("All Categories");
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const fileInputRef = useRef(null);
  const { theme } = useAppContext();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const categoryLabel = (c) => {
    switch (c) {
      case "All Categories":
        return t("all_categories");
      case "Food & Dining":
        return t("cat_food");
      case "Transport":
        return t("cat_transport");
      case "Shopping":
        return t("cat_shopping");
      case "Entertainment":
        return t("cat_entertainment");
      default:
        return c;
    }
  };

  const dateRangeLabel = (d) => {
    switch (d) {
      case "Last 7 Days":
        return t("range_7");
      case "Last 30 Days":
        return t("range_30");
      case "Last 90 Days":
        return t("range_90");
      case "All Time":
        return t("range_all");
      default:
        return d;
    }
  };

  // compute date cutoff based on dateRange selection
  const cutoffDate = useMemo(() => {
    if (dateRange === "All Time") return null;
    const days =
      dateRange === "Last 7 Days" ? 7 : dateRange === "Last 30 Days" ? 30 : 90;
    const d = new Date();
    d.setDate(d.getDate() - days);
    return d;
  }, [dateRange]);

  const filtered = useMemo(() => {
    return MOCK_RECEIPTS.filter((r) => {
      if (search) {
        const q = search.toLowerCase();
        if (
          !(
            r.merchant.toLowerCase().includes(q) ||
            r.category.toLowerCase().includes(q)
          )
        )
          return false;
      }
      if (category !== "All Categories" && r.category !== category)
        return false;
      if (cutoffDate) {
        if (parseISODate(r.date) < cutoffDate) return false;
      }
      return true;
    }).sort((a, b) => parseISODate(b.date) - parseISODate(a.date));
  }, [search, category, cutoffDate]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  // Stats
  const stats = useMemo(() => {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const receiptsThisMonth = MOCK_RECEIPTS.filter(
      (r) => parseISODate(r.date) >= startOfMonth
    );
    const totalSpent = MOCK_RECEIPTS.reduce((s, r) => s + r.total, 0);
    const categorySums = {};
    MOCK_RECEIPTS.forEach((r) => {
      categorySums[r.category] = (categorySums[r.category] || 0) + r.total;
    });
    const topCategory =
      Object.keys(categorySums).sort(
        (a, b) => categorySums[b] - categorySums[a]
      )[0] || "-";
    const daysRange = 30; // approximate for average per day
    const avgPerDay = totalSpent / daysRange;
    return {
      receiptsThisMonth: receiptsThisMonth.length,
      totalSpent,
      topCategory,
      avgPerDay,
    };
  }, []);

  // Smart advisor derived insights
  const advisor = useMemo(() => {
    const categorySums = {};
    MOCK_RECEIPTS.forEach((r) => {
      categorySums[r.category] = (categorySums[r.category] || 0) + r.total;
    });
    const total = Object.values(categorySums).reduce((s, n) => s + n, 0) || 1;
    const topCategory =
      Object.keys(categorySums).sort(
        (a, b) => categorySums[b] - categorySums[a]
      )[0] || "-";
    const topCategoryPct = Math.round(
      (categorySums[topCategory] / total) * 100
    );

    // example budget insight
    const diningSum = categorySums["Food & Dining"] || 0;
    const diningBudget = 600; // pretend monthly budget
    const diningDelta = diningBudget - diningSum; // positive means below budget

    // recurring subscriptions mock
    const recurringCount = MOCK_RECEIPTS.filter(
      (r) =>
        r.merchant.toLowerCase().includes("netflix") ||
        r.merchant.toLowerCase().includes("spotify")
    ).length;
    const recurringTotal = MOCK_RECEIPTS.filter(
      (r) =>
        r.merchant.toLowerCase().includes("netflix") ||
        r.merchant.toLowerCase().includes("spotify")
    ).reduce((s, r) => s + r.total, 0);

    return {
      topCategory,
      topCategoryPct,
      diningDelta,
      recurringCount,
      recurringTotal,
    };
  }, []);

  function handleUploadClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e) {
    const f = e.target.files?.[0];
    console.log(f);

    if (f)
      alert(
        `Would upload file: ${f.name} (upload integration not implemented in demo)`
      );
  }

  function handleAction(action, receipt) {
    alert(`${action} - ${receipt.merchant} 
ID: ${receipt.id}`);
  }

  function gotoPage(n) {
    setPage(Math.max(1, Math.min(totalPages, n)));
  }

  return (
    <div
      className={`min-h-screen p-8 ${
        theme === "dark" ? "bg-dark-gray text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1
              className={`text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {t("my_receipts")}
            </h1>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {t("receipts_subtitle")}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-40 p-5 overflow-x-hidden">
            <button
              onClick={handleUploadClick}
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v14m7-7H5"
                />
              </svg>
              {t("upload_receipt")}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </header>

        {/* Filters */}
        <div
          className={`rounded-lg shadow p-4 mb-6 ${
            theme === "dark" ? "bg-medium-gray" : "bg-white"
          }`}
        >
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                className={`${
                  isArabic ? "text-right block" : "text-sm text-gray-600"
                }`}
              >
                {t("search_label")}
              </label>
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder={t("search_placeholder")}
                className={`mt-2 w-full border rounded px-3 py-2 text-sm ${
                  theme === "dark"
                    ? "bg-transparent text-white border-gray-600"
                    : "bg-white text-black"
                }`}
              />
            </div>
            <div>
              <label
                className={`${
                  isArabic ? "text-right block" : "text-sm text-gray-600"
                }`}
              >
                {t("date_range_label")}
              </label>
              <select
                value={dateRange}
                onChange={(e) => {
                  setDateRange(e.target.value);
                  setPage(1);
                }}
                className={`mt-2 w-full border rounded px-3 py-2 text-sm ${
                  theme === "dark"
                    ? "bg-transparent text-white border-gray-600"
                    : "bg-white text-black"
                }`}
              >
                {DATE_RANGES.map((d) => (
                  <option key={d} value={d}>
                    {dateRangeLabel(d)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                className={`${
                  isArabic ? "text-right block" : "text-sm text-gray-600"
                }`}
              >
                {t("category_label")}
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
                className={`mt-2 w-full border rounded px-3 py-2 text-sm ${
                  theme === "dark"
                    ? "bg-transparent text-white border-gray-600"
                    : "bg-white text-black"
                }`}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {categoryLabel(c)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div
          className={`${
            theme === "dark" ? "bg-medium-gray" : "bg-white"
          } rounded-lg shadow overflow-hidden`}
        >
          <table className="min-w-full table-auto">
            <thead
              className={theme === "dark" ? "bg-medium-gray" : "bg-gray-50"}
            >
              <tr
                className={`${isArabic ? "text-right" : "text-left"} text-xs ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <th className="p-4">{t("merchant_label")}</th>
                <th className="p-4">{t("date_label")}</th>
                <th className="p-4">{t("total_label")}</th>
                <th className="p-4">{t("category_label")}</th>
                <th className="p-4">{t("actions_label")}</th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="p-4">
                    <div
                      className={`font-medium ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {r.merchant}
                    </div>
                    <div
                      className={`${
                        theme === "dark"
                          ? "text-gray-300"
                          : "text-xs text-gray-500"
                      }`}
                    >
                      {r.desc}
                    </div>
                  </td>
                  <td
                    className={`${
                      theme === "dark"
                        ? "p-4 text-gray-300"
                        : "p-4 text-gray-600"
                    }`}
                  >
                    {new Date(r.date).toLocaleDateString()}
                  </td>
                  <td
                    className={`p-4 font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {formatCurrency(r.total)}
                  </td>
                  <td className="p-4">
                    <span
                      className={`${
                        theme === "dark"
                          ? "inline-block px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-200"
                          : "inline-block px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-700"
                      }`}
                    >
                      {r.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        title="View"
                        onClick={() => handleAction("View", r)}
                        className="p-2 rounded hover:bg-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                      <button
                        title="Edit"
                        onClick={() => handleAction("Edit", r)}
                        className="p-2 rounded hover:bg-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        </svg>
                      </button>
                      <button
                        title="Delete"
                        onClick={() => handleAction("Delete", r)}
                        className="p-2 rounded hover:bg-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            className={`p-4 flex items-center justify-between ${
              theme === "dark" ? "text-gray-300" : "text-gray-500"
            }`}
          >
            <div className="text-sm">
              {t("showing_receipts", {
                start: Math.min(filtered.length, (page - 1) * pageSize + 1),
                end: Math.min(filtered.length, page * pageSize),
                total: filtered.length,
              })}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => gotoPage(page - 1)}
                disabled={page === 1}
                className={`px-3 py-1 border rounded disabled:opacity-50 ${
                  theme === "dark"
                    ? "bg-transparent text-gray-300 border-gray-600"
                    : ""
                }`}
              >
                {t("previous")}
              </button>
              <div className="inline-flex items-center border rounded overflow-hidden">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => gotoPage(i + 1)}
                    className={`px-3 py-1 ${
                      page === i + 1
                        ? "bg-purple-600 text-white"
                        : "text-gray-600"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => gotoPage(page + 1)}
                disabled={page === totalPages}
                className={`px-3 py-1 border rounded disabled:opacity-50 ${
                  theme === "dark"
                    ? "bg-transparent text-gray-300 border-gray-600"
                    : ""
                }`}
              >
                {t("next")}
              </button>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div
            className={`${
              theme === "dark"
                ? "bg-medium-gray text-white"
                : "bg-white text-black"
            } rounded-lg p-4 shadow`}
          >
            <div
              className={`text-xs${
                theme === "dark" ? "text-gray-300" : " text-gray-500"
              }`}
            >
              {t("total_receipts_this_month")}
            </div>
            <div className="text-sm md:text-2xl font-bold mt-2 ">
              {stats.receiptsThisMonth}
            </div>
          </div>
          <div
            className={`${
              theme === "dark"
                ? "bg-medium-gray text-white"
                : "bg-white text-black"
            } rounded-lg p-4 shadow`}
          >
            <div
              className={`${
                theme === "dark" ? "text-gray-300" : "text-xs text-gray-500"
              }`}
            >
              {t("total_spent")}
            </div>
            <div className="text-md md:text-2xl font-bold mt-2">
              {formatCurrency(stats.totalSpent)}
            </div>
          </div>
          <div
            className={`${
              theme === "dark"
                ? "bg-medium-gray text-white"
                : "bg-white text-black"
            } rounded-lg p-4 shadow`}
          >
            <div
              className={` ${
                theme === "dark" ? "text-gray-300" : "text-xs text-gray-500"
              }`}
            >
              {t("top_spending_category")}
            </div>
            <div className="text-sm md:text-2xl font-bold mt-2">
              {stats.topCategory}
            </div>
          </div>
          <div
            className={`${
              theme === "dark"
                ? "bg-medium-gray text-white"
                : "bg-white text-black"
            } rounded-lg p-4 shadow`}
          >
            <div
              className={`${
                theme === "dark" ? "text-gray-300" : "text-xs text-gray-500"
              }`}
            >
              {t("average_per_day")}
            </div>
            <div className="text-md md:text-2xl font-bold mt-2">
              {formatCurrency(stats.avgPerDay)}
            </div>
          </div>
        </div>

        {/* Smart Financial Advisor */}
        <div className="mt-6 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">
                {t("smart_financial_advisor")}
              </h2>
              <div className="text-sm opacity-90">{t("advisor_summary")}</div>
            </div>
            <div className="text-sm opacity-90">{t("advisor_summary")}</div>
          </div>

          <div className="space-y-3">
            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
              <p className="text-sm font-medium text-white">
                🚗 Transport Spending Alert
              </p>
              <p className="text-xs text-purple-100 mt-1">
                {t("advisor_transport_spending", {
                  pct: advisor.topCategoryPct,
                  category: advisor.topCategory,
                })}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
              <p className="text-sm font-medium text-white">
                🥗 Food Budget Optimization
              </p>
              <p className="text-xs text-purple-100 mt-1">
                {t("advisor_food_budget", {
                  delta:
                    advisor.diningDelta >= 0
                      ? formatCurrency(advisor.diningDelta)
                      : formatCurrency(-advisor.diningDelta),
                  belowAbove: t(
                    advisor.diningDelta >= 0 ? "budget_below" : "budget_above"
                  ),
                })}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
              <p className="text-sm font-medium text-white">
                🔔 Subscription Review Reminder
              </p>
              <p className="text-xs text-purple-100 mt-1">
                {t("advisor_subscription_review", {
                  count: advisor.recurringCount,
                  total: formatCurrency(advisor.recurringTotal),
                })}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <button className="w-full md:w-1/2 bg-white text-purple-600 py-3 rounded-lg font-medium hover:opacity-90 transition">
                {t("view_full_report")}
              </button>
              <button className="w-full md:w-1/2 border border-white py-3 rounded-lg font-medium hover:bg-white/10 transition">
                {t("set_budget_goals")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
