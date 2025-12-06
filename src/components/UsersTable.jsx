import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/Toast";
import { ConfirmDialog, DetailModal, EditModal } from "@/components/Modals";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/contexts/useAppContext";

const initialUsers = [
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

  const [currentUsers, setCurrentUsers] = useState(initialUsers);

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { theme } = useAppContext();

  const { t, i18n } = useTranslation();
  const isRTL = i18n.language.startsWith("ar");

  const handleView = (user) => {
    setSelectedUser(user);
    setShowDetailModal(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleSaveEdit = (formData) => {
    setCurrentUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === selectedUser.id
          ? {
              ...u,
              name: formData.name,
              email: formData.email,
              role: formData.role,
              status: formData.status,
            }
          : u
      )
    );

    showToast(
      t("usersTable.userUpdated", { name: formData.name }),
      "success",
      3000
    );
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowConfirmDialog(true);
  };

  const confirmDelete = () => {
    setCurrentUsers((prevUsers) =>
      prevUsers.filter((u) => u.id !== selectedUser.id)
    );

    showToast(
      t("usersTable.userDeleted", { name: selectedUser.name }),
      "delete",
      4000
    );
    setShowConfirmDialog(false);
    setSelectedUser(null);
  };

  const handleViewAll = () => {
    showToast(t("usersTable.viewAllUsers"), "info");
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
          title={t("usersTable.userDetails")}
          details={[
            { label: t("usersTable.name"), value: selectedUser.name },
            { label: t("usersTable.email"), value: selectedUser.email },
            {
              label: t("usersTable.role"),
              value: t(`usersTable.role${selectedUser.role}`),
            },
            {
              label: t("usersTable.registeredDate"),
              value: selectedUser.registeredDate,
            },
            {
              label: t("usersTable.status"),
              value: t(`usersTable.status${selectedUser.status}`),
            },
          ]}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedUser(null);
          }}
        />
      )}

      {/* Edit Modal */}
      {showEditModal && selectedUser && (
        <EditModal
          title={t("usersTable.editUser")}
          fields={[
            {
              name: "name",
              label: t("usersTable.name"),
              value: selectedUser.name,
              type: "text",
              required: true,
            },
            {
              name: "email",
              label: t("usersTable.email"),
              value: selectedUser.email,
              type: "email",
              required: true,
            },
            {
              name: "role",
              label: t("usersTable.role"),
              value: selectedUser.role,
              type: "select",
              options: ["Admin", "User", "Moderator"],
              required: true,
            },
            {
              name: "status",
              label: t("usersTable.status"),
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

      {/* Confirm Delete Dialog */}
      {showConfirmDialog && selectedUser && (
        <ConfirmDialog
          message={t("usersTable.confirmDelete", { name: selectedUser.name })}
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
        } rounded-xl shadow-sm `}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3
            className={`text-lg font-bold ${
              theme === "light" ? "text-slate-800" : "text-white"
            }`}
          >
            {t("usersTable.recentUsers")}
          </h3>
          <button
            onClick={handleViewAll}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            {t("usersTable.viewAllUsers")}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table
            className={`w-full ${
              isRTL ? "direction-rtl text-right" : "text-left"
            }`}
          >
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                  {t("usersTable.name")}
                </th>
                <th className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                  {t("usersTable.email")}
                </th>
                <th className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                  {t("usersTable.role")}
                </th>
                <th className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                  {t("usersTable.registeredDate")}
                </th>
                <th className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                  {t("usersTable.status")}
                </th>
                <th className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-4">
                  {t("usersTable.actions")}
                </th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user) => {
                const roleLabel = t(`usersTable.role${user.role}`);
                const statusLabel = t(`usersTable.status${user.status}`);

                return (
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
                        {roleLabel}
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
                        {statusLabel}
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
