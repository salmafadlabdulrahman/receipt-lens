import React from "react";
import {
  X,
  CheckCircle,
  AlertCircle,
  Info,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import { useAppContext } from "@/contexts/useAppContext";

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
  const { theme } = useAppContext();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-dark-gray"
        } rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 animate-scale-in`}
      >
        <div className="flex items-start gap-3 mb-4">
          <div className="text-amber-600">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3
              className={`text-lg font-semibold  mb-2 ${
                theme === "light" ? "text-slate-900" : "text-white"
              }`}
            >
              Confirm Delete
            </h3>
            <p
              className={`text-sm ${
                theme === "light" ? "text-slate-600" : "text-white"
              }`}
            >
              {message}
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailModal = ({ title, details, onClose }) => {
  const { theme } = useAppContext();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-dark-gray"
        }  rounded-xl shadow-2xl p-6 max-w-lg w-full mx-4 animate-scale-in`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3
            className={`${
              theme === "light" ? "text-slate-900" : "text-white"
            } text-xl font-bold`}
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-3">
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex justify-between py-2 border-b border-slate-100 last:border-0"
            >
              <span
                className={`${
                  theme === "light" ? "text-slate-500" : "text-white"
                } text-sm font-medium `}
              >
                {detail.label}:
              </span>
              <span
                className={`${
                  theme === "light" ? "text-slate-900" : "text-white"
                } text-sm font-semibold `}
              >
                {detail.value}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const EditModal = ({ title, fields, onSave, onClose }) => {
  const { theme } = useAppContext();
  const [formData, setFormData] = React.useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value }), {})
  );

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in ${
        theme === "light" ? "" : "text-white"
      }`}
    >
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-dark-gray"
        }  rounded-xl shadow-2xl p-6 max-w-lg w-full mx-4 animate-scale-in max-h-[90vh] overflow-y-auto`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3
            className={`text-xl font-bold ${
              theme === "light" ? "text-slate-900" : "text-white"
            } `}
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field, index) => (
            <div key={index}>
              <label
                className={`block text-sm font-medium mb-1 ${
                  theme === "light" ? "text-slate-700" : "text-white"
                } `}
              >
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={`${
                    theme === "light" ? "" : "bg-dark-gray text-white"
                  } w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                  required={field.required}
                >
                  {field.options.map((option, i) => (
                    <option key={i} value={option} className="">
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows={3}
                  required={field.required}
                />
              ) : (
                <input
                  type={field.type || "text"}
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required={field.required}
                  disabled={field.disabled}
                />
              )}
            </div>
          ))}

          <div className="flex gap-3 justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ConfirmDialog, DetailModal, EditModal };
