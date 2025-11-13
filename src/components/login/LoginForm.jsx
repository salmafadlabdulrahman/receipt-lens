import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Lock } from "lucide-react";
import InputField from "../common/InputField.jsx";
import PrimaryButton from "../common/PrimaryButton.jsx";
import i18n from "../../i18n.js";

const LoginForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", formData);
  };

  return (
    <form
      className={`space-y-1 ${
        i18n.language === "ar" ? "text-right" : "text-left"
      }`}
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
        className={i18n.language === "ar" ? "text-right" : "text-left"}
      />

      <InputField
        label={t("password")}
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder={t("password_placeholder")}
        icon={Lock}
        className={i18n.language === "ar" ? "text-right" : "text-left"}
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center text-gray-400">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded-lg focus:ring-purple-500"
          />
          <span className={`${i18n.language === "ar" ? "mr-2" : "ml-2"}`}>
            {t("remember_me")}
          </span>
        </label>
        <a
          href="#"
          className="text-purple-600 font-medium hover:text-purple-700 transition duration-150"
        >
          {t("forgot_password")}
        </a>
      </div>

      <PrimaryButton>{t("login_button")}</PrimaryButton>

      <div className="text-center mt-6 text-gray-600">
        {t("signup_text")}
        <a
          href="/Register"
          className={`text-purple-600 font-medium hover:text-purple-700 ${
            i18n.language === "ar" ? "mr-1" : "ml-1"
          }`}
        >
          {t("signup_button")}
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
