import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(i18n.language || "en");
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-200 dark:bg-purple-800 text-gray-800 dark:text-gray-200 flex items-center justify-center hover:scale-110 transition-transform duration-200"
      title={lang === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <GrLanguage size={22} />
    </button>
  );
};

export default LanguageToggle;
