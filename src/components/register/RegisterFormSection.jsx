import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../common/InputField.jsx";
import PrimaryButton from "../common/PrimaryButton.jsx";
import HeaderLogo from "../login/HeaderLogo.jsx";
import { Link } from "react-router-dom";

const RegisterFormSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(t("passwords_not_match"));
      return;
    }
    console.log("Register attempt with:", formData);
  };

  return (
    <div className="max-w-md w-full py-4">
      <HeaderLogo />

      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-2 text-center">
        {t("signup_title")} 
      </h2>
      <p className="text-gray-500 text-center mb-8">{t("signup_subtitle")}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label={t("full_name")}
          type="text"
          name="fullName"
          placeholder={t("full_name_placeholder")}
          value={formData.fullName}
          onChange={handleChange}
        />

        <InputField
          label={t("email")}
          type="email"
          name="email"
          placeholder={t("email_placeholder")}
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label={t("password")}
          type="password"
          name="password"
          placeholder={t("password_placeholder")}
          value={formData.password}
          onChange={handleChange}
        />

        <InputField
          label={t("confirm_password")}
          type="password"
          name="confirmPassword"
          placeholder={t("confirm_password_placeholder")}
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <div className="flex items-center pt-2">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            required
          />
          <label
            htmlFor="agreeToTerms"
            className="ml-2 block text-sm text-gray-900"
          >
            {t("agree_terms")}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              {t("terms_of_service")}
            </a>{" "}
            {t("and")}{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              {t("privacy_policy")}
            </a>
          </label>
        </div>

        <PrimaryButton type="submit" disabled={!formData.agreeToTerms}>
          {t("create_account")}
        </PrimaryButton>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        {t("already_have_account")}
        <Link
          to="/"
          className="text-purple-600 hover:text-purple-700 font-medium ml-1"
        >
          {t("login")}
        </Link>
      </p>

      <p className="mt-4 text-center text-xs text-gray-400 flex items-center justify-center">
        <span className="mr-1"></span> {t("data_protected")}
      </p>
    </div>
  );
};

export default RegisterFormSection;
