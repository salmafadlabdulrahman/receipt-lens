import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/Toast";
import { ConfirmDialog, DetailModal, EditModal } from "@/components/Modals";

const receipts = [
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

const RecentReceiptsTable = () => {
  const { toasts, showToast, removeToast } = useToast();
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

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
    showToast(`Receipt from ${formData.merchant} updated`, 'success', 3000);
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
    showToast(`Receipt from ${selectedReceipt.merchant} deleted`, 'delete', 4000);
    setShowConfirmDialog(false);
    setSelectedReceipt(null);
  };

  const handleViewAll = () => {
    console.log("View all receipts clicked");
    showToast("Navigating to all receipts...", 'info');
  };

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
          title="Receipt Details"
          details={[
            { label: "Merchant", value: selectedReceipt.merchant },
            { label: "Amount", value: selectedReceipt.amount },
            { label: "Category", value: selectedReceipt.category },
            { label: "Date", value: selectedReceipt.date },
            { label: "Status", value: selectedReceipt.status },
          ]}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedReceipt(null);
          }}
        />
      )}

      {showEditModal && selectedReceipt && (
        <EditModal
          title="Edit Receipt"
          fields={[
            { name: "merchant", label: "Merchant", value: selectedReceipt.merchant, type: "text", required: true },
            { name: "amount", label: "Amount", value: selectedReceipt.amount, type: "text", required: true },
            { name: "category", label: "Category", value: selectedReceipt.category, type: "select", options: ["Dining", "Transportation", "Shopping", "Business"], required: true },
            { name: "date", label: "Date", value: selectedReceipt.date, type: "text", required: true },
            { name: "status", label: "Status", value: selectedReceipt.status, type: "select", options: ["Processed", "Processing", "Pending"], required: true },
          ]}
          onSave={handleSaveEdit}
          onClose={() => {
            setShowEditModal(false);
            setSelectedReceipt(null);
          }}
        />
      )}

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
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
      <div className="flex items-center justify-between p-6 border-b border-slate-100">
        <h3 className="text-lg font-bold text-slate-800">Recent Receipts</h3>
        <button onClick={handleViewAll} className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
          View All Receipts
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                Merchant
              </th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                Date
              </th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                Category
              </th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                Amount
              </th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                Status
              </th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {receipts.map((receipt, index) => (
              <tr key={index} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${receipt.iconBg} font-semibold text-sm`}>
                      {receipt.icon}
                    </div>
                    <span className="font-semibold text-slate-900">{receipt.merchant}</span>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-slate-500">{receipt.date}</td>

                <td className="px-6 py-4">
                  <Badge variant="secondary" className={`${receipt.categoryColor} font-medium rounded-md px-3 py-1 text-xs border-0`}>
                    {receipt.category}
                  </Badge>
                </td>

                <td className="px-6 py-4 font-semibold text-slate-900">{receipt.amount}</td>

                <td className="px-6 py-4">
                  <Badge
                    variant="secondary"
                    className={`font-medium rounded-md px-3 py-1 text-xs border-0 ${
                      receipt.status === "Processed"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {receipt.status}
                  </Badge>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <Button onClick={() => handleView(receipt)} variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button onClick={() => handleEdit(receipt)} variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button onClick={() => handleDelete(receipt)} variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default RecentReceiptsTable;
