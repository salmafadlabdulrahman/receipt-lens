import React from "react";
import { useTranslation } from "react-i18next";
import ForgotPasswordForm from "../../components/login/ForgotPasswordPage";
import LanguageSwitcher from "../../components/common/LanguageSwitcher.jsx";
import HeaderLogo from "../../components/login/HeaderLogo";

const ForgotPasswordPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center pt-16 sm:pt-10 bg-gray-100">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>

      <div className="flex flex-col items-center mb-10">
        <HeaderLogo />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4">
          {t("brand_title")}
        </h1>
        <p className="text-gray-500 text-center mt-2">
          {t("forgot_password_subtitle")}
        </p>
      </div>

      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
        <ForgotPasswordForm />
      </div>

      <p className="mt-4 text-sm text-gray-600 text-center">
        {t("need_help")}{" "}
        <a
          href="/contact"
          className="text-purple-600 hover:text-purple-700 font-medium"
        >
          {t("support_team")}
        </a>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
