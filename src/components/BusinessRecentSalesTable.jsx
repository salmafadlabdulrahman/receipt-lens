import { Badge } from "@/components/ui/badge";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/Toast";
import { ConfirmDialog, DetailModal, EditModal } from "@/components/Modals";
import { useAppContext } from "@/contexts/useAppContext";

const sales = [
  {
    id: 1,
    customer: "Acme Corporation",
    date: "Dec 15, 2024",
    category: "Electronics",
    amount: "$2,450.00",
    status: "Completed",
  },
  {
    id: 2,
    customer: "Tech Solutions Inc",
    date: "Dec 14, 2024",
    category: "Software",
    amount: "$1,890.00",
    status: "Completed",
  },
  {
    id: 3,
    customer: "Global Retail Co",
    date: "Dec 13, 2024",
    category: "Clothing",
    amount: "$3,240.00",
    status: "Pending",
  },
  {
    id: 4,
    customer: "StartUp Hub",
    date: "Dec 12, 2024",
    category: "Services",
    amount: "$890.00",
    status: "Completed",
  },
];

const categoryColors = {
  Electronics: "bg-indigo-50 text-indigo-600",
  Software: "bg-purple-50 text-purple-600",
  Clothing: "bg-pink-50 text-pink-600",
  Services: "bg-amber-50 text-amber-600",
};

const statusColors = {
  Completed: "bg-emerald-50 text-emerald-600",
  Pending: "bg-amber-50 text-amber-600",
};

export function RecentSalesTable() {
  const { toasts, showToast, removeToast } = useToast();
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

  const { theme } = useAppContext();

  const handleView = (sale) => {
    console.log("View sale:", sale);
    setSelectedSale(sale);
    setShowDetailModal(true);
  };

  const handleEdit = (sale) => {
    console.log("Edit sale:", sale);
    setSelectedSale(sale);
    setShowEditModal(true);
  };

  const handleSaveEdit = (formData) => {
    console.log("Save sale:", formData);
    showToast(`Sale for ${formData.customer} updated`, "success", 3000);
    setShowEditModal(false);
    setSelectedSale(null);
    // TODO: When backend is ready:
    // fetch(`/api/sales/${selectedSale.id}`, { method: 'PUT', body: JSON.stringify(formData) })
    //   .then(() => refreshSalesList())
  };

  const handleDelete = (sale) => {
    setSelectedSale(sale);
    setShowConfirmDialog(true);
  };

  const confirmDelete = () => {
    console.log("Delete sale:", selectedSale);
    showToast(`Sale for ${selectedSale.customer} deleted`, "delete", 4000);
    setShowConfirmDialog(false);
    setSelectedSale(null);
  };

  const handleViewAll = () => {
    console.log("View all sales clicked");
    showToast("Navigating to all sales...", "info");
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

      {showDetailModal && selectedSale && (
        <DetailModal
          title="Sale Details"
          details={[
            { label: "Customer", value: selectedSale.customer },
            { label: "Amount", value: selectedSale.amount },
            { label: "Category", value: selectedSale.category },
            { label: "Date", value: selectedSale.date },
            { label: "Status", value: selectedSale.status },
          ]}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedSale(null);
          }}
        />
      )}

      {showEditModal && selectedSale && (
        <EditModal
          title="Edit Sale"
          fields={[
            {
              name: "customer",
              label: "Customer",
              value: selectedSale.customer,
              type: "text",
              required: true,
            },
            {
              name: "amount",
              label: "Amount",
              value: selectedSale.amount,
              type: "text",
              required: true,
            },
            {
              name: "category",
              label: "Category",
              value: selectedSale.category,
              type: "select",
              options: ["Electronics", "Software", "Clothing", "Services"],
              required: true,
            },
            {
              name: "date",
              label: "Date",
              value: selectedSale.date,
              type: "text",
              required: true,
            },
            {
              name: "status",
              label: "Status",
              value: selectedSale.status,
              type: "select",
              options: ["Completed", "Pending", "Cancelled"],
              required: true,
            },
          ]}
          onSave={handleSaveEdit}
          onClose={() => {
            setShowEditModal(false);
            setSelectedSale(null);
          }}
        />
      )}

      {showConfirmDialog && selectedSale && (
        <ConfirmDialog
          message={`Are you sure you want to delete the sale for ${selectedSale.customer} (${selectedSale.amount})? This action cannot be undone.`}
          onConfirm={confirmDelete}
          onCancel={() => {
            setShowConfirmDialog(false);
            setSelectedSale(null);
          }}
        />
      )}

      <div
        className={`${
          theme === "light"
            ? "bg-white text-black border border-slate-200 "
            : "bg-dark-gray text-white border border-slate-500 "
        }  rounded-xl shadow-sm`}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <h3
            className={`${
              theme === "light" ? "text-slate-900" : "text-white"
            } text-lg font-semibold `}
          >
            Recent Sales
          </h3>
          <button
            onClick={handleViewAll}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            View All Sales
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-5 py-3">
                  Customer
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-5 py-3">
                  Date
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-5 py-3">
                  Category
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-5 py-3">
                  Amount
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-5 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-5 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr
                  key={sale.id}
                  className="border-b border-slate-500 last:border-0 cursor-pointer transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                        <span className="text-sm font-medium text-indigo-600 h-10 w-10 flex justify-center items-center rounded-full">
                          {sale.customer.charAt(0)}
                        </span>
                      </div>
                      <span
                        className={`${
                          theme === "light" ? "text-slate-900" : "text-white"
                        } font-medium `}
                      >
                        {sale.customer}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500">
                    {sale.date}
                  </td>
                  <td className="px-5 py-4">
                    <Badge
                      variant="secondary"
                      className={categoryColors[sale.category]}
                    >
                      {sale.category}
                    </Badge>
                  </td>
                  <td
                    className={`${
                      theme === "light" ? "text-slate-900" : "text-white"
                    }px-5 py-4 font-semibold `}
                  >
                    {sale.amount}
                  </td>
                  <td className="px-5 py-4">
                    <Badge
                      variant="secondary"
                      className={statusColors[sale.status]}
                    >
                      {sale.status}
                    </Badge>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleView(sale)}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(sale)}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(sale)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-slate-500 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
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
}
