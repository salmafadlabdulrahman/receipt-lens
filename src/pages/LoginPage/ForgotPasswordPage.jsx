import React from "react";
import { useTranslation } from "react-i18next";
import ForgotPasswordForm from "../../components/login/ForgotPasswordPage.jsx";
import LanguageSwitcher from "../../components/common/LanguageSwitcher.jsx";

const ForgotPasswordPage = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundColor: "var( --bg-main)",
      }}
      className="min-h-screen flex flex-col items-center justify-center p-4  sm:pt-10"
    >
      {" "}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />{" "}
      </div>{" "}
      <div
        className="w-full max-w-md p-8 shadow-xl"
        style={{
          backgroundColor: "var( --bg-main)",
        }}
      >
        {" "}
        <div className="flex justify-center mb-6 relative">
          {" "}
          <img
            src="/cactus-forgot.png"
            alt="Crying Cactus"
            className="w-42 h-42 rounded-full"
          />{" "}
          <img
            src="/stars.png"
            alt="Star"
            className="absolute top-0 left-22 w-10 h-10 rotate-10"
          />{" "}
          <img
            src="/send.png"
            alt="Green Blob Shape"
            className="absolute top-35 left-25 transform -translate-y-1/2 w-10 h-10"
          />
        </div>
        <h1
          className="text-2xl font-bold text-center font-900 mb-2"
          style={{
            color: "var(--primary)",
            fontFamily: "var(--font-primary)",
          }}
        >
          {t("forgot_password_title")}
        </h1>
        <p
          className="text-sm text-center font-500 mb-6"
          style={{
            color: "var( --text-muted)",
            fontFamily: "var(--font-secondary)",
          }}
        >
          {t("forgot_password_subtitle")}
        </p>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
