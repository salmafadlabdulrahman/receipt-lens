import React from "react";
import { useTranslation } from "react-i18next";
import { CornerDownRight } from "lucide-react";

const HeaderLogo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mb-10">
      <div
        className="p-3  rounded-xl shadow-xl mb-4"
        style={{ background: "var(--login-right-gradient)" }}
      >
        <CornerDownRight
          size={30}
          className=" transform rotate-45"
          style={{
            color: "var(--text-main)",
          }}
        />
      </div>
      <h1
        className="text-2xl font-extrabold font-800"
        style={{
          color: "var(--text-main)",
          fontFamily: "var(--font-primary)",
        }}
      >
        {t("app_name")}
      </h1>
      <p
        className="text-sm font-500 mt-1"
        style={{
          color: "var(--text-main)",
          fontFamily: "var(--font-primary)",
        }}
      >
        {t("app_tagline")}
      </p>
    </div>
  );
};

export default HeaderLogo;
