import React, { useEffect, useState } from "react";

const LanguageSwitcher: React.FC = () => {
  const [lang, setLang] = useState<string>(
    () => window.localStorage.getItem("app_lang") || "en"
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("app_lang", lang);
  }, [lang]);

  const toggleLanguage = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full text-gray-700 dark:text-gray-200 bg-muted/50 hover:opacity-90"
      title={lang === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      {lang === "en" ? "EN" : "AR"}
    </button>
  );
};

export default LanguageSwitcher;
