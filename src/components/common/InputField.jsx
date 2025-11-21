import React from "react";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-medium block"
        style={{
          color: "var(--text-main)",
          fontFamily: "var(--font-primary)",
          fontWeight: 700,
        }}
      >
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Icon size={20} />
          </div>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-${
            Icon ? "10" : "3"
          } pr-4 py-3 border rounded-xl
                     focus:ring-2 focus:ring-[var(--secondary)] focus:border-[var(--secondary)] transition duration-150 shadow-sm`}
          style={{
            backgroundColor: "var(--bg-card)",
            color: "var(--text-main)",
            border: "var(--border-color)",
          }}
        />
      </div>
    </div>
  );
};

export default InputField;
