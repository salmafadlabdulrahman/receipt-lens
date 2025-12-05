import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/Toast";
import { ConfirmDialog, DetailModal, EditModal } from "@/components/Modals";
import { useAppContext } from "@/contexts/useAppContext";

const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    role: "Admin",
    roleColor: "bg-indigo-50 text-indigo-600",
    registeredDate: "Dec 15, 2024",
    status: "Active",
    statusColor: "bg-emerald-50 text-emerald-600",
    initials: "SJ",
    avatarBg: "bg-indigo-100 text-indigo-700",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    role: "User",
    roleColor: "bg-blue-50 text-blue-600",
    registeredDate: "Dec 14, 2024",
    status: "Active",
    statusColor: "bg-emerald-50 text-emerald-600",
    initials: "MC",
    avatarBg: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    role: "Moderator",
    roleColor: "bg-amber-50 text-amber-600",
    registeredDate: "Dec 13, 2024",
    status: "Pending",
    statusColor: "bg-amber-50 text-amber-600",
    initials: "ED",
    avatarBg: "bg-amber-100 text-amber-700",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "james.wilson@email.com",
    role: "User",
    roleColor: "bg-blue-50 text-blue-600",
    registeredDate: "Dec 12, 2024",
    status: "Active",
    statusColor: "bg-emerald-50 text-emerald-600",
    initials: "JW",
    avatarBg: "bg-blue-100 text-blue-700",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    email: "lisa.anderson@email.com",
    role: "User",
    roleColor: "bg-blue-50 text-blue-600",
    registeredDate: "Dec 11, 2024",
    status: "Inactive",
    statusColor: "bg-slate-100 text-slate-600",
    initials: "LA",
    avatarBg: "bg-slate-100 text-slate-700",
  },
];

export default function UsersTable() {
  const { toasts, showToast, removeToast } = useToast();
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { theme } = useAppContext();

  const handleView = (user) => {
    console.log("View user:", user);
    setSelectedUser(user);
    setShowDetailModal(true);
  };

  const handleEdit = (user) => {
    console.log("Edit user:", user);
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleSaveEdit = (formData) => {
    console.log("Save user:", formData);
    showToast(`${formData.name} has been updated`, "success", 3000);
    setShowEditModal(false);
    setSelectedUser(null);
    // TODO: When backend is ready:
    // fetch(`/api/users/${selectedUser.id}`, { method: 'PUT', body: JSON.stringify(formData) })
    //   .then(() => refreshUsersList())
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowConfirmDialog(true);
  };

  const confirmDelete = () => {
    console.log("Delete user:", selectedUser);
    showToast(`${selectedUser.name} has been deleted`, "delete", 4000);
    setShowConfirmDialog(false);
    setSelectedUser(null);
  };

  const handleViewAll = () => {
    console.log("View all users clicked");
    showToast("Navigating to all users page...", "info");
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

      {showDetailModal && selectedUser && (
        <DetailModal
          title="User Details"
          details={[
            { label: "Name", value: selectedUser.name },
            { label: "Email", value: selectedUser.email },
            { label: "Role", value: selectedUser.role },
            { label: "Registered Date", value: selectedUser.registeredDate },
            { label: "Status", value: selectedUser.status },
          ]}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedUser(null);
          }}
        />
      )}

      {showEditModal && selectedUser && (
        <EditModal
          title="Edit User"
          fields={[
            {
              name: "name",
              label: "Name",
              value: selectedUser.name,
              type: "text",
              required: true,
            },
            {
              name: "email",
              label: "Email",
              value: selectedUser.email,
              type: "email",
              required: true,
            },
            {
              name: "role",
              label: "Role",
              value: selectedUser.role,
              type: "select",
              options: ["Admin", "User", "Moderator"],
              required: true,
            },
            {
              name: "status",
              label: "Status",
              value: selectedUser.status,
              type: "select",
              options: ["Active", "Inactive", "Pending"],
              required: true,
            },
          ]}
          onSave={handleSaveEdit}
          onClose={() => {
            setShowEditModal(false);
            setSelectedUser(null);
          }}
        />
      )}

      {showConfirmDialog && selectedUser && (
        <ConfirmDialog
          message={`Are you sure you want to delete ${selectedUser.name}? This action cannot be undone.`}
          onConfirm={confirmDelete}
          onCancel={() => {
            setShowConfirmDialog(false);
            setSelectedUser(null);
          }}
        />
      )}

      <div
        className={`${
          theme === "light"
            ? "bg-white border border-slate-100"
            : "bg-dark-gray border border-slate-500"
        }  rounded-xl shadow-sm `}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3
            className={`text-lg font-bold ${
              theme === "light" ? "text-slate-800" : "text-white"
            }`}
          >
            Recent Users
          </h3>
          <button
            onClick={handleViewAll}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            View All Users
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-500">
                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                  Name
                </th>
                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                  Email
                </th>
                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                  Role
                </th>
                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                  Registered Date
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
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-500 last:border-0 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback
                          className={`${user.avatarBg} font-semibold text-sm`}
                        >
                          {user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span
                        className={`font-semibold ${
                          theme === "light" ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {user.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {user.email}
                  </td>

                  <td className="px-6 py-4">
                    <Badge
                      variant="secondary"
                      className={`${user.roleColor} font-medium rounded-md px-3 py-1 text-xs border-0`}
                    >
                      {user.role}
                    </Badge>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {user.registeredDate}
                  </td>

                  <td className="px-6 py-4">
                    <Badge
                      variant="secondary"
                      className={`${user.statusColor} font-medium rounded-md px-3 py-1 text-xs border-0`}
                    >
                      {user.status}
                    </Badge>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Button
                        onClick={() => handleView(user)}
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => handleEdit(user)}
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => handleDelete(user)}
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      >
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
}
