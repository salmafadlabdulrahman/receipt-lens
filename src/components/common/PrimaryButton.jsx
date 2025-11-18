import React from "react";
import { LogIn } from "lucide-react";
import i18n from "../../i18n.js";

const PrimaryButton = ({ children, onClick }) => {
  const isRTL = i18n.language === "ar";

  return (
    <button
      type="submit"
      onClick={onClick}
      className={`w-full flex items-center justify-center px-4 py-3 my-1.5  text-lg font-medium rounded-xl text-white shadow-lg 
                  focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 transform hover:scale-[1.01]`}
      style={{
        color: "var(--text-main)",
        fontFamily: "var(--font-primary)",
        background: "var(  --login-btn)",
      }}
    >
      {!isRTL && <LogIn size={20} className="mr-2" />}
      <span className={isRTL ? "ml-2" : ""}>{children}</span>
      {isRTL && <LogIn size={20} className="ml-2" />}
    </button>
  );
};

export default PrimaryButton;
