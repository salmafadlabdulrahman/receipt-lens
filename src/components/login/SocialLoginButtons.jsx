import React from "react";
import { useTranslation } from "react-i18next";

const SocialLoginButtons = () => {
  const { i18n } = useTranslation();
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
        className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition duration-150"
        style={{ color: "var(--text-main)" }}
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

      <button         style={{ color: "var(--text-main)" }}
 className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition duration-150">
        <svg
          className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`}
          style={{
            color: "var(--text-main)",
            fontFamily: "var(--font-primary)",
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0.297C5.37 0.297 0 5.667 0 12.297c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.262.82-.582 0-.288-.011-1.052-.017-2.065-3.338.726-4.042-1.61-4.042-1.61-.547-1.388-1.337-1.757-1.337-1.757-1.093-.748.083-.732.083-.732 1.205.085 1.84 1.237 1.84 1.237 1.074 1.837 2.816 1.306 3.502.998.108-.777.42-1.306.763-1.606-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.382 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.839 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.476 5.922.431.372.816 1.102.816 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.216.7.825.58C20.565 22.092 24 17.592 24 12.297c0-6.63-5.37-12-12-12z" />
        </svg>
        GitHub
      </button>
    </div>
  );
};

export default SocialLoginButtons;
