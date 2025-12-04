import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";

const LanguageToggle = () => {
 const { i18n } = useTranslation();

  const savedLang = localStorage.getItem("language") || "en";
  const [lang, setLang] = useState(savedLang);

  useEffect(() => {
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        background: "var(--login-right-gradient)",
        color: "var(--text-main)",
      }}
      className="p-2 rounded-full text-gray-800 dark:text-gray-200 flex items-center justify-center hover:scale-110 transition-transform duration-200"
      title={lang === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <GrLanguage size={22} />
    </button>
  );
};

export default LanguageToggle;
