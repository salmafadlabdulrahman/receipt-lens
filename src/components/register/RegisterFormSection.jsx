import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../common/InputField.jsx";
import PrimaryButton from "../common/PrimaryButton.jsx";
import HeaderLogo from "../login/HeaderLogo.jsx";
import { Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";

const RegisterFormSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = t("full_name_required");

    if (!formData.email) tempErrors.email = t("email_required");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = t("email_invalid");

    if (!formData.password) tempErrors.password = t("password_required");

    if (!formData.confirmPassword)
      tempErrors.confirmPassword = t("confirm_password_required");
    else if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = t("passwords_not_match");

    if (!formData.agreeToTerms) tempErrors.agreeToTerms = t("must_agree_terms");

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <div className="max-w-md w-full py-4">
      <HeaderLogo />

      <h2 className="text-3xl font-bold font-900 mt-8 mb-2 text-center">
        {t("signup_title")}
      </h2>
      <p className="font-500 text-center mb-8">{t("signup_subtitle")}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label={t("full_name")}
          type="text"
          name="fullName"
          placeholder={t("full_name_placeholder")}
          value={formData.fullName}
          onChange={handleChange}
          icon={User}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName}</p>
        )}

        <InputField
          label={t("email")}
          type="email"
          name="email"
          placeholder={t("email_placeholder")}
          value={formData.email}
          onChange={handleChange}
          icon={Mail}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <InputField
          label={t("password")}
          type="password"
          name="password"
          placeholder={t("password_placeholder")}
          value={formData.password}
          onChange={handleChange}
          icon={Lock}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <InputField
          label={t("confirm_password")}
          type="password"
          name="confirmPassword"
          placeholder={t("confirm_password_placeholder")}
          value={formData.confirmPassword}
          onChange={handleChange}
          icon={Lock}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}

        <div className="flex items-center pt-2">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className=" cursor-pointer h-4 w-4 rounded focus:ring-2 focus:ring-[var(--secondary)] border-[var(--border-color)] bg-[var(--bg-card)]"
          />
          <label htmlFor="agreeToTerms" className="ml-2 block text-sm cursor-pointer">
            {t("agree_terms")}
            <a href="#" className="font-bold ml-1 ">
              {t("terms_of_service")}
            </a>{" "}
            {t("and")}{" "}
            <a href="#" className="font-bold ml-1">
              {t("privacy_policy")}
            </a>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
        )}

        <PrimaryButton type="submit">{t("create_account")}</PrimaryButton>
      </form>

      <p className="mt-6 text-center text-sm">
        {t("already_have_account")}
        <Link to="/login" className="ml-1 font-bold">
          {t("login")}
        </Link>
      </p>

      <p className="mt-4 text-center text-xs flex items-center justify-center">
        {t("data_protected")}
      </p>
    </div>
  );
};

export default RegisterFormSection;
