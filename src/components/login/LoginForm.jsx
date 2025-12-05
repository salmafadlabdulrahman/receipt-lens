import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Lock } from "lucide-react";
import InputField from "../common/InputField.jsx";
import PrimaryButton from "../common/PrimaryButton.jsx";
import i18n from "../../i18n.js";
import useDarkMode from "../pricing/useDarkMode.js";

const LoginForm = () => {
  const { t } = useTranslation();
  const isDarkMode = useDarkMode();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.email) tempErrors.email = t("email_required");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = t("email_invalid");

    if (!formData.password) tempErrors.password = t("password_required");

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  const isArabic = i18n.language === "ar";

  return (
    <form
      className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}
      onSubmit={handleSubmit}
    >
      <InputField
        label={t("email")}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t("email_placeholder")}
        icon={Mail}
        className={isArabic ? "text-right" : "text-left pl-10"}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <InputField
        label={t("password")}
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder={t("password_placeholder")}
        icon={Lock}
        className={isArabic ? "text-right" : "text-left pl-10"}
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}

      <div className="flex items-center justify-between text-sm ">
        <label className="flex items-center font-400 cursor-pointer">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="w-4 h-4 border-gray-300 rounded-lg cursor-pointer"
          />
          <span className={`${isArabic ? "mr-2" : "ml-2"}`}>
            {t("remember_me")}
          </span>
        </label>
        <a href="/ForgotPassword" className="transition duration-150 font-bold">
          {t("forgot_password")}
        </a>
      </div>

      <PrimaryButton>{t("login_button")}</PrimaryButton>

      <div
        style={{ color: isDarkMode ? "white" : "var(--text-main)" }}
        className="text-center mt-6 text-gray-600"
      >
        {t("signup_text")}
        <a
          href="/Register"
          className={`font-bold ${isArabic ? "mr-1" : "ml-1"}`}
        >
          {t("signup_button")}
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
