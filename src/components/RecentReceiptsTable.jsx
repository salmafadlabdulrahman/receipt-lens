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

/**
 * Note:
 * - Kept both receipts arrays from feature/admindashboard and dev branches
 *   and merged them into `mergedReceipts` so nothing is removed.
 * - The status comparison checks both raw strings (e.g. "Processed") and
 *   translated strings (t("processed")) to remain compatible with both sets.
 */

const receiptsFeature = [
  {
    merchant: "Starbucks Coffee",
    date: "Dec 15, 2024",
    category: "Dining",
    amount: "$12.45",
    status: "Processed",
    icon: "S",
    iconBg: "bg-red-100 text-red-700",
    categoryColor: "bg-orange-50 text-orange-600",
  },
  {
    merchant: "Shell Gas Station",
    date: "Dec 14, 2024",
    category: "Transportation",
    amount: "$45.20",
    status: "Processed",
    icon: "S",
    iconBg: "bg-blue-100 text-blue-700",
    categoryColor: "bg-cyan-50 text-cyan-600",
  },
  {
    merchant: "Amazon Purchase",
    date: "Dec 13, 2024",
    category: "Shopping",
    amount: "$89.99",
    status: "Processing",
    icon: "A",
    iconBg: "bg-emerald-100 text-emerald-700",
    categoryColor: "bg-purple-50 text-purple-600",
  },
  {
    merchant: "Office Supplies Co",
    date: "Dec 12, 2024",
    category: "Business",
    amount: "$156.78",
    status: "Processed",
    icon: "O",
    iconBg: "bg-purple-100 text-purple-700",
    categoryColor: "bg-indigo-50 text-indigo-600",
  },
];

const receiptsDev = [
  {
    merchant: "Starbucks Coffee",
    date: "Dec 15, 2024",
    categoryKey: "dining",
    category: "Dining", // fallback for non-translated view
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
  // from feature branch
  const { toasts, showToast, removeToast } = useToast();
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  // from dev branch
  const { theme } = useAppContext();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language && i18n.language.startsWith && i18n.language.startsWith("ar");

  // merge both arrays without deleting anything (feature first, then dev)
  // This preserves all original entries. If there are duplicates, they will appear twice.
  const mergedReceipts = [...receiptsFeature, ...receiptsDev];

  const handleView = (receipt) => {
    console.log("View receipt:", receipt);
    setSelectedReceipt(receipt);
    setShowDetailModal(true);
  };

  const handleEdit = (receipt) => {
    console.log("Edit receipt:", receipt);
    setSelectedReceipt(receipt);
    setShowEditModal(true);
  };

  const handleSaveEdit = (formData) => {
    console.log("Save receipt:", formData);
    showToast(`Receipt from ${formData.merchant} updated`, "success", 3000);
    setShowEditModal(false);
    setSelectedReceipt(null);
    // TODO: When backend is ready:
    // fetch(`/api/receipts/${selectedReceipt.id}`, { method: 'PUT', body: JSON.stringify(formData) })
    //   .then(() => refreshReceiptsList())
  };

  const handleDelete = (receipt) => {
    setSelectedReceipt(receipt);
    setShowConfirmDialog(true);
  };

  const confirmDelete = () => {
    console.log("Delete receipt:", selectedReceipt);
    showToast(`Receipt from ${selectedReceipt?.merchant} deleted`, "delete", 4000);
    setShowConfirmDialog(false);
    setSelectedReceipt(null);
  };

  const handleViewAll = () => {
    console.log("View all receipts clicked");
    showToast(t ? t("navigatingToAllReceipts") || "Navigating to all receipts..." : "Navigating to all receipts...", "info");
  };

  // helper to determine translated labels where dev branch used t()
  const getCategoryLabel = (r) => {
    if (r.categoryKey && t) return t(r.categoryKey);
    return r.category || r.category; // fallback
  };

  const getStatusLabel = (r) => {
    if (r.statusKey && t) return t(r.statusKey);
    return r.status || r.status;
  };

  const isStatusProcessed = (r) => {
    const label = getStatusLabel(r);
    return label === "Processed" || label === t?.("processed");
  };

  return (
    <>
      {/* Toasts (feature branch) */}
      {toasts &&
        toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
            duration={toast.duration}
          />
        ))}

      {/* Detail Modal */}
      {showDetailModal && selectedReceipt && (
        <DetailModal
          title={t ? t("receiptDetails") || "Receipt Details" : "Receipt Details"}
          details={[
            { label: t ? t("merchant") || "Merchant" : "Merchant", value: selectedReceipt.merchant },
            { label: t ? t("amount") || "Amount" : "Amount", value: selectedReceipt.amount },
            { label: t ? t("category") || "Category" : "Category", value: getCategoryLabel(selectedReceipt) },
            { label: t ? t("date") || "Date" : "Date", value: selectedReceipt.date },
            { label: t ? t("status") || "Status" : "Status", value: getStatusLabel(selectedReceipt) },
          ]}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedReceipt(null);
          }}
        />
      )}

      {/* Edit Modal */}
      {showEditModal && selectedReceipt && (
        <EditModal
          title={t ? t("editReceipt") || "Edit Receipt" : "Edit Receipt"}
          fields={[
            { name: "merchant", label: "Merchant", value: selectedReceipt.merchant, type: "text", required: true },
            { name: "amount", label: "Amount", value: selectedReceipt.amount, type: "text", required: true },
            {
              name: "category",
              label: "Category",
              value: selectedReceipt.category || getCategoryLabel(selectedReceipt),
              type: "select",
              options: [t ? t("dining") || "Dining" : "Dining", t ? t("transportation") || "Transportation" : "Transportation", t ? t("shopping") || "Shopping" : "Shopping", t ? t("business") || "Business" : "Business"],
              required: true,
            },
            { name: "date", label: "Date", value: selectedReceipt.date, type: "text", required: true },
            {
              name: "status",
              label: "Status",
              value: selectedReceipt.status || getStatusLabel(selectedReceipt),
              type: "select",
              options: [t ? t("processed") || "Processed" : "Processed", t ? t("processing") || "Processing" : "Processing", "Pending"],
              required: true,
            },
          ]}
          onSave={handleSaveEdit}
          onClose={() => {
            setShowEditModal(false);
            setSelectedReceipt(null);
          }}
        />
      )}

      {/* Confirm Delete */}
      {showConfirmDialog && selectedReceipt && (
        <ConfirmDialog
          message={`Are you sure you want to delete the receipt from ${selectedReceipt.merchant} (${selectedReceipt.amount})? This action cannot be undone.`}
          onConfirm={confirmDelete}
          onCancel={() => {
            setShowConfirmDialog(false);
            setSelectedReceipt(null);
          }}
        />
      )}

      {/* Main Card / Table */}
      <Card className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">{t ? t("recentReceipts") || "Recent Receipts" : "Recent Receipts"}</h3>
          <div className="flex items-center gap-2">
            <button onClick={handleViewAll} className="text-sm text-primary hover:text-primary/80">
              {t ? t("viewAllReceipts") || "View All Receipts" : "View All Receipts"}
            </button>
            {/* keep MoreHorizontal from dev branch */}
            <button className="p-2 rounded-md hover:bg-muted/50">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table
            className={`w-full border-collapse text-sm ${
              theme === "light" ? "bg-white text-black" : "bg-dark-gray text-white"
            } ${isRTL ? "direction-rtl text-right" : "text-left"}`}
          >
            <thead>
              <tr className="border-b border-slate-100">
                {/* Using a combined header that supports translation and responsive classes */}
                {[
                  { label: t ? t("merchant") || "Merchant" : "Merchant", className: "text-left" },
                  { label: t ? t("date") || "Date" : "Date", className: "hidden sm:table-cell text-left" },
                  { label: t ? t("category") || "Category" : "Category", className: "text-left" },
                  { label: t ? t("amount") || "Amount" : "Amount", className: "text-left" },
                  { label: t ? t("status") || "Status" : "Status", className: "text-left" },
                  { label: t ? t("actions") || "Actions" : "Actions", className: "text-left" },
                ].map((header, idx) => (
                  <th
                    key={idx}
                    className={`text-xs font-semibold text-slate-400 uppercase tracking-wider px-4 py-3 ${header.className} ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {mergedReceipts.map((receipt, index) => (
                <tr key={`${index}-${receipt.merchant}`} className="border-b last:border-0 hover:bg-slate-50/50 transition-colors">
                  {/* Merchant */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${receipt.iconBg} font-semibold text-sm`}>
                        {receipt.icon}
                      </div>
                      <span className="font-semibold text-slate-900">{receipt.merchant}</span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-4 py-3 text-sm text-slate-500 hidden sm:table-cell">{receipt.date}</td>

                  {/* Category */}
                  <td className="px-4 py-3">
                    <Badge variant="secondary" className={`${receipt.categoryColor ?? ""} font-medium rounded-md px-3 py-1 text-xs border-0`}>
                      {getCategoryLabel(receipt)}
                    </Badge>
                  </td>

                  {/* Amount */}
                  <td className="px-4 py-3 font-semibold text-slate-900">{receipt.amount}</td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <Badge
                      variant="secondary"
                      className={`font-medium rounded-md px-3 py-1 text-xs border-0 ${
                        isStatusProcessed(receipt) ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {getStatusLabel(receipt)}
                    </Badge>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      {/* keep action buttons from feature branch */}
                      <Button onClick={() => handleView(receipt)} variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button onClick={() => handleEdit(receipt)} variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button onClick={() => handleDelete(receipt)} variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 className="h-4 w-4" />
                      </Button>

                      {/* More options (dev branch) - visible on larger screens */}
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
