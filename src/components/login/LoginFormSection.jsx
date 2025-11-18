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

      <h2
        className="text-3xl font-bold font-900 mt-8 mb-2"
        style={{
          fontFamily: "var( --font-primary)",
          color: "var(--text-main)",
        }}
      >
        {t("login_welcome")}
      </h2>
      <p
        className="font-600 mb-8 text-lg"
        style={{
          fontFamily: "var( --font-primary)",
          color: "var(--text-main)",
        }}
      >
        {t("login_subtitle")}
      </p>

      <LoginForm />

      <div className="flex items-center my-8">
        <hr className="grow border-gray-300" />
        <span
          className="px-4 font-500 text-sm font-medium"
          style={{
            fontFamily: "var( --font-primary)",
            color: "var(--text-main)",
          }}
        >
          {t("or_continue_with")}
        </span>
        <hr className="grow border-gray-300" />
      </div>

      <SocialLoginButtons />
    </div>
  );
};

export default LoginFormSection;
