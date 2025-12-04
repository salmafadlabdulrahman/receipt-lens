import React from "react";
import { LogIn } from "lucide-react";
import i18n from "../../i18n.js";
import useDarkMode from "../pricing/useDarkMode.js";

const PrimaryButton = ({ children, onClick }) => {
  const isDarkMode = useDarkMode();

  const isRTL = i18n.language === "ar";

  return (
    <button
      type="submit"
      onClick={onClick}
      className={`w-full flex  cursor-pointer items-center justify-center px-4 py-3 my-1.5 text-lg font-medium rounded-xl shadow-lg 
                  focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 transform hover:scale-[1.01]`}
      style={{
        background: isDarkMode
          ? "var(--login-right-gradient)"
          : "var(--login-btn)",
        color: isDarkMode ? "white" : "var(--text-main)",
        fontFamily: "var(--font-primary)",
      }}
    >
      {!isRTL && <LogIn size={20} className="mr-2" />}
      <span className={isRTL ? "ml-2" : ""}>{children}</span>
      {isRTL && <LogIn size={20} className="ml-2" />}
    </button>
  );
};

export default PrimaryButton;
