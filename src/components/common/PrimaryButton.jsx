import React from "react";
import { LogIn } from "lucide-react";
import i18n from "../../i18n.js";

const PrimaryButton = ({ children, onClick }) => {
  const isRTL = i18n.language === "ar";

  return (
    <button
      type="submit"
      onClick={onClick}
      className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-lg font-medium rounded-xl text-white shadow-lg 
                  bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
                  focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 transform hover:scale-[1.01]`}
    >
      {!isRTL && <LogIn size={20} className="mr-2" />}
      <span className={isRTL ? "ml-2" : ""}>{children}</span>
      {isRTL && <LogIn size={20} className="ml-2" />}
    </button>
  );
};

export default PrimaryButton;
