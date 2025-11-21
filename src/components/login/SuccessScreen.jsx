import React from "react";
import { useTranslation } from "react-i18next";
import LanguageThemeToggle from "../../components/LanguageThemeToggle.jsx";

const SuccessScreen = ({ onResubmit }) => {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-10 sm:pt-10 transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-main)", 
        color: "var(--text-main)",
      }}
    >
      <div className="absolute top-4 right-4 z-10">
        <LanguageThemeToggle />
      </div>

      <div
        className="w-full max-w-md p-20 shadow-xl rounded-xl transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-card)", 
          color: "var(--text-main)",
        }}
      >
        <div className="flex justify-center mb-6 relative">
          <img
            src="/cactus-forgot.png"
            alt="Success Cactus"
            className="w-52 h-52 rounded-full"
            style={{
              filter: "var(--image-dark-filter)", 
            }}
          />
          <img
            src="/stars.png"
            alt="Star"
            className="absolute top-0 left-12 w-10 h-10 rotate-10"
          />
          <img
            src="/check.png"
            alt="Send Icon"
            className="absolute top-10 right-10 transform -translate-y-1/2 w-15 h-15"
          />
        </div>

        <h1
          className="text-2xl font-bold text-center font-900 mb-2"
          style={{
            color: "var(--text-main)",
            fontFamily: "var(--font-primary)",
          }}
        >
          {t("success_title")}
        </h1>

        <p
          className="text-m text-center font-600 mb-6"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-secondary)",
          }}
        >
          {t("success_check_email")}
        </p>

        <p
          className="text-m font-500 mb-8 text-center p-1"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-secondary)",
          }}
        >
          {t("cant_get_email")}
          <span
            className="text-m font-bold cursor-pointer ml-1"
            style={{
              color: "var(--secondary)",
              fontFamily: "var(--font-primary)",
            }}
            onClick={onResubmit}
          >
            {t("resubmit")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SuccessScreen;
