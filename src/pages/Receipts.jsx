import React, { useMemo, useState, useRef } from "react";
import SmartFinancilelAdvisor from "../components/SmartFinancialAdvisor.jsx";
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">My Receipts</h1>
            <p className="text-gray-500">Track and manage all your expenses</p>
          </div>
          <div className="flex items-center gap-4">
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
              Upload Receipt
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
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-600">Search</label>
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search by merchant or category..."
                className="mt-2 w-full border rounded px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => {
                  setDateRange(e.target.value);
                  setPage(1);
                }}
                className="mt-2 w-full border rounded px-3 py-2 text-sm"
              >
                {DATE_RANGES.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">Category</label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
                className="mt-2 w-full border rounded px-3 py-2 text-sm"
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs text-gray-600">
                <th className="p-4">Merchant</th>
                <th className="p-4">Date</th>
                <th className="p-4">Total</th>
                <th className="p-4">Category</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="p-4">
                    <div className="font-medium">{r.merchant}</div>
                    <div className="text-xs text-gray-500">{r.desc}</div>
                  </td>
                  <td className="p-4 text-gray-600">
                    {new Date(r.date).toLocaleDateString()}
                  </td>
                  <td className="p-4 font-semibold">
                    {formatCurrency(r.total)}
                  </td>
                  <td className="p-4">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-700">
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

          <div className="p-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {Math.min(filtered.length, (page - 1) * pageSize + 1)}-
              {Math.min(filtered.length, page * pageSize)} of {filtered.length}{" "}
              receipts
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => gotoPage(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
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
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-xs text-gray-500">
              Total Receipts this Month
            </div>
            <div className="text-2xl font-bold mt-2">
              {stats.receiptsThisMonth}
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-xs text-gray-500">Total Spent</div>
            <div className="text-2xl font-bold mt-2">
              {formatCurrency(stats.totalSpent)}
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-xs text-gray-500">Top Spending Category</div>
            <div className="text-2xl font-bold mt-2">{stats.topCategory}</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-xs text-gray-500">Average per Day</div>
            <div className="text-2xl font-bold mt-2">
              {formatCurrency(stats.avgPerDay)}
            </div>
          </div>
        </div>

        {/* Smart Financial Advisor */}
        <div className="mt-6 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">Smart Financial Advisor</h2>
              <div className="text-sm opacity-90">
                AI-powered insights for better spending
              </div>
            </div>
            <div className="text-sm opacity-90">Summary</div>
          </div>

          <div className="space-y-3">
            <div className="bg-white bg-opacity-10 p-3 rounded">
              <div className="font-semibold">Transport Spending Alert</div>
              <div className="text-sm opacity-90">
                You spent {advisor.topCategoryPct}% on {advisor.topCategory}{" "}
                this period. Consider setting a travel limit or using public
                transportation to save money.
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-3 rounded">
              <div className="font-semibold">Food Budget Optimization</div>
              <div className="text-sm opacity-90">
                Your dining expenses are{" "}
                {advisor.diningDelta >= 0
                  ? `${formatCurrency(advisor.diningDelta)} below`
                  : `${formatCurrency(-advisor.diningDelta)} above`}{" "}
                budget this month. Great job! You could allocate these savings
                to your emergency fund.
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-3 rounded">
              <div className="font-semibold">Subscription Review Reminder</div>
              <div className="text-sm opacity-90">
                You have {advisor.recurringCount} recurring subscriptions
                totaling {formatCurrency(advisor.recurringTotal)}/month. Review
                them to ensure you're using all services actively.
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-white text-purple-700 rounded px-4 py-2 font-semibold">
                View Full Report
              </button>
              <button className="flex-1 border border-white bg-transparent rounded px-4 py-2 font-semibold">
                Set Budget Goals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
