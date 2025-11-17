import React from "react";
import { Mail, Lock } from "lucide-react";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
}) => (
  <div className="space-y-2">
    <label
      htmlFor={name}
      className="text-sm font-medium font-700 block"
      style={{ color: "var(--text-main)", fontFamily: "var(--font-primary)" }}
    >
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        {Icon && <Icon size={20} />}
      </div>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition duration-150 shadow-sm"
      />
    </div>
  </div>
);

export default InputField;
