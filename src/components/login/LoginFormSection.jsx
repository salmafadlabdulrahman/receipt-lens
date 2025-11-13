import React from "react";
import { useTranslation } from "react-i18next";
import HeaderLogo from "./HeaderLogo.jsx";
import LoginForm from "./LoginForm.jsx";
import SocialLoginButtons from "./SocialLoginButtons.jsx";

const LoginFormSection = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-md w-full">
      <HeaderLogo />

      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-2">
        {t("login_welcome")}
      </h2>
      <p className="text-gray-600 mb-8 text-lg">{t("login_subtitle")}</p>

      <LoginForm />

      <div className="flex items-center my-8">
        <hr className="grow border-gray-300" />
        <span className="px-4 text-gray-500 text-sm font-medium">
          {t("or_continue_with")}
        </span>
        <hr className="grow border-gray-300" />
      </div>

      <SocialLoginButtons />
    </div>
  );
};

export default LoginFormSection;
