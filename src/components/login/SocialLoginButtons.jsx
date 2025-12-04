import React from "react";
import { useTranslation } from "react-i18next";
import useDarkMode from "../pricing/useDarkMode.js";

const SocialLoginButtons = () => {
  const { i18n } = useTranslation();
  const isDarkMode = useDarkMode();
  const isRTL = i18n.language === "ar";
  return (
    <div
      className={`flex ${
        isRTL
          ? "flex-row-reverse space-x-0 space-x-reverse space-x-4"
          : "space-x-4"
      }`}
    >
      <button
        className="flex cursor-pointer items-center justify-center w-full py-2 border border-gray-300 rounded-xl text-gray-600  transition duration-150"
        style={{ color: isDarkMode ? "white" : "var(--text-main)" }}
      >
        <svg
          className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`}
          style={{
            color: "var(--text-main)",
            fontFamily: "var(--font-primary)",
          }}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFC107"
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.706-5.857 7.747-10.703 7.747-6.572 0-11.92-5.348-11.92-11.92s5.348-11.92 11.92-11.92c3.243 0 6.142 1.186 8.448 3.093l5.809-5.809C38.078 7.828 32.614 5 24 5 13.957 5 5.292 13.665 5.292 23.708c0 10.042 8.665 18.708 18.708 18.708 10.137 0 17.702-7.266 17.702-17.208 0-1.282-.124-2.484-.33-3.615z"
          />
        </svg>
        Google
      </button>
    </div>
  );
};

export default SocialLoginButtons;
