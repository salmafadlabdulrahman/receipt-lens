import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Edit, Trash2, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/Toast";
import { ConfirmDialog, DetailModal, EditModal } from "@/components/Modals";
import { useAppContext } from "../contexts/useAppContext";
import { useTranslation } from "react-i18next";

const receiptsDev = [
  {
    merchant: "Starbucks Coffee",
    date: "Dec 15, 2024",
    categoryKey: "dining",
    category: "Dining",
    amount: "$12.45",
    statusKey: "processed",
    status: "Processed",
    icon: "S",
    iconBg: "bg-red-100",
    categoryColor: "bg-orange-100 text-orange-700",
  },
  {
    merchant: "Shell Gas Station",
    date: "Dec 14, 2024",
    categoryKey: "transportation",
    category: "Transportation",
    amount: "$45.20",
    statusKey: "processed",
    status: "Processed",
    icon: "S",
    iconBg: "bg-blue-100",
    categoryColor: "bg-blue-100 text-blue-700",
  },
  {
    merchant: "Amazon Purchase",
    date: "Dec 13, 2024",
    categoryKey: "shopping",
    category: "Shopping",
    amount: "$89.99",
    statusKey: "processing",
    status: "Processing",
    icon: "A",
    iconBg: "bg-green-100",
    categoryColor: "bg-purple-100 text-purple-700",
  },
  {
    merchant: "Office Supplies Co",
    date: "Dec 12, 2024",
    categoryKey: "business",
    category: "Business",
    amount: "$156.78",
    statusKey: "processed",
    status: "Processed",
    icon: "O",
    iconBg: "bg-purple-100",
    categoryColor: "bg-indigo-100 text-indigo-700",
  },
];

const RecentReceiptsTable = () => {
  const { toasts, showToast, removeToast } = useToast();
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const { theme } = useAppContext();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language.startsWith("ar");
  const isDark = theme === "dark";

  const mergedReceipts = [...receiptsDev];

  const formatCurrency = (amount) => {
    const number = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
    return new Intl.NumberFormat(i18n.language, {
      style: "currency",
      currency: "USD",
    }).format(number);
  };

  const getCategoryLabel = (r) =>
    r.categoryKey && t ? t(r.categoryKey) : r.category;
  const getStatusLabel = (r) => (r.statusKey && t ? t(r.statusKey) : r.status);
  const isStatusProcessed = (r) => {
    const label = getStatusLabel(r);
    return label === t?.("processed") || label === "Processed";
  };

  const handleView = (receipt) => {
    setSelectedReceipt(receipt);
    setShowDetailModal(true);
  };
  const handleEdit = (receipt) => {
    setSelectedReceipt(receipt);
    setShowEditModal(true);
  };
  const handleSaveEdit = (formData) => {
    showToast(
      `${formData.merchant} ${t("updated") || "updated"}`,
      "success",
      3000
    );
    setShowEditModal(false);
    setSelectedReceipt(null);
  };
  const handleDelete = (receipt) => {
    setSelectedReceipt(receipt);
    setShowConfirmDialog(true);
  };
  const confirmDelete = () => {
    showToast(
      `${selectedReceipt?.merchant} ${t("deleted") || "deleted"}`,
      "delete",
      4000
    );
    setShowConfirmDialog(false);
    setSelectedReceipt(null);
  };
  const handleViewAll = () => {
    showToast(
      t("navigatingToAllReceipts") || "Navigating to all receipts...",
      "info"
    );
  };

  const headers = [
    { key: "merchant", label: t("merchant") || "Merchant" },
    { key: "date", label: t("date") || "Date" },
    { key: "category", label: t("category") || "Category" },
    { key: "amount", label: t("amount") || "Amount" },
    { key: "status", label: t("statusUser") || "Status" },
    { key: "actions", label: t("actionsUser") || "Actions" },
  ];

  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
          duration={toast.duration}
        />
      ))}

      {showDetailModal && selectedReceipt && (
        <DetailModal
          title={t("receiptDetails") || "Receipt Details"}
          details={[
            {
              label: t("merchant") || "Merchant",
              value: selectedReceipt.merchant,
            },
            {
              label: t("amount") || "Amount",
              value: formatCurrency(selectedReceipt.amount),
            },
            {
              label: t("category") || "Category",
              value: getCategoryLabel(selectedReceipt),
            },
            { label: t("date") || "Date", value: selectedReceipt.date },
            {
              label: t("status") || "Status",
              value: getStatusLabel(selectedReceipt),
            },
          ]}
          onClose={() => setShowDetailModal(false)}
        />
      )}

      {showEditModal && selectedReceipt && (
        <EditModal
          title={t("editReceipt") || "Edit Receipt"}
          fields={[
            {
              name: "merchant",
              label: t("merchant") || "Merchant",
              value: selectedReceipt.merchant,
              type: "text",
              required: true,
            },
            {
              name: "amount",
              label: t("amount") || "Amount",
              value: selectedReceipt.amount,
              type: "text",
              required: true,
            },
            {
              name: "category",
              label: t("category") || "Category",
              value: getCategoryLabel(selectedReceipt),
              type: "select",
              options: [
                t("dining") || "Dining",
                t("transportation") || "Transportation",
                t("shopping") || "Shopping",
                t("business") || "Business",
              ],
              required: true,
            },
            {
              name: "date",
              label: t("date") || "Date",
              value: selectedReceipt.date,
              type: "text",
              required: true,
            },
            {
              name: "status",
              label: t("status") || "Status",
              value: getStatusLabel(selectedReceipt),
              type: "select",
              options: [
                t("processed") || "Processed",
                t("processing") || "Processing",
                "Pending",
              ],
              required: true,
            },
          ]}
          onSave={handleSaveEdit}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {showConfirmDialog && selectedReceipt && (
        <ConfirmDialog
          message={`${
            t("confirmDeleteReceipt") ||
            "Are you sure you want to delete this receipt?"
          } (${selectedReceipt.merchant})`}
          onConfirm={confirmDelete}
          onCancel={() => setShowConfirmDialog(false)}
        />
      )}

      {/* Main Card / Table */}
      <Card
        className={`p-6 rounded-xl shadow-sm  ${
          theme === "light"
            ? "bg-white "
            : "bg-dark-gray border border-slate-500"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">
            {t("recentReceipts") || "Recent Receipts"}
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleViewAll}
              className="text-sm text-primary hover:text-primary/80"
            >
                 {t("viewAllReceipts") || "View All Receipts"}
            </button>
            <button className="p-2 rounded-md hover:bg-muted/50">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Add a wrapper with horizontal scroll */}
        <div className="overflow-x-auto -mx-6 px-6">
          <table
            className={`w-full border-collapse min-w-[700px] text-sm ${
              theme === "light"
                ? "bg-white text-black"
                : "bg-dark-gray text-white"
            } ${isRTL ? "direction-rtl text-right" : "text-left"}`}
          >
            <thead>
              <tr className="border-b border-slate-500">
                {[
                  {
                    label: t ? t("merchant") || "Merchant" : "Merchant",
                    className: "text-left",
                  },
                  {
                    label: t ? t("date") || "Date" : "Date",
                    className: "hidden sm:table-cell text-left",
                  },
                  {
                    label: t ? t("category") || "Category" : "Category",
                    className: "text-left",
                  },
                  {
                    label: t ? t("amount") || "Amount" : "Amount",
                    className: "text-left",
                  },
                  {
                    label: t ? t("status") || "Status" : "Status",
                    className: "text-left",
                  },
                  {
                    label: t ? t("actions") || "Actions" : "Actions",
                    className: "text-left",
                  },
                ].map((header, idx) => (
                  <th
                    key={idx}
                    className={`text-xs font-semibold text-slate-400 uppercase tracking-wider px-4 py-3 whitespace-nowrap ${
                      header.className
                    } ${isRTL ? "text-right" : "text-left"}`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mergedReceipts.map((receipt, index) => (
                <tr
                  key={`${index}-${receipt.merchant}`}
                  className="border-b border-slate-500 last:border-0 "
                >
                  {/* Merchant */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3 whitespace-nowrap">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${receipt.iconBg} font-semibold text-sm shrink-0`}
                      >
                        {receipt.icon}
                      </div>
                      <span
                        className={`font-semibold ${
                          theme === "light" ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {receipt.merchant}
                      </span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-4 py-3 text-sm text-slate-500 hidden sm:table-cell whitespace-nowrap">
                    {receipt.date}
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3">
                    <Badge
                      variant="secondary"
                      className={`${
                        receipt.categoryColor ?? ""
                      } font-medium rounded-md px-3 py-1 text-xs border-0 whitespace-nowrap`}
                    >
                      {getCategoryLabel(receipt)}
                    </Badge>
                  </td>

                  {/* Amount */}
                  <td
                    className={`px-4 py-3 font-semibold whitespace-nowrap ${
                      theme === "light" ? "text-slate-900" : "text-slate-500"
                    }`}
                  >
                    {receipt.amount}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <Badge
                      variant="secondary"
                      className={`font-medium rounded-md px-3 py-1 text-xs border-0 whitespace-nowrap ${
                        isStatusProcessed(receipt)
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {getStatusLabel(receipt)}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <Button
                        onClick={() => handleView(receipt)}
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => handleEdit(receipt)}
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => handleDelete(receipt)}
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>

                      <button className="hidden sm:inline-flex items-center p-2 rounded-md hover:bg-muted/50">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
};

export default RecentReceiptsTable;
