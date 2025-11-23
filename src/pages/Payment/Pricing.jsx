import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
};

const plans = [
  {
    type: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$15",
    billingKey: "perfectForStarting",
    isPopular: false,
    buttonTextKey: "buttonText",
    features: [
      { textKey: "track10", type: "check" },
      { textKey: "basicCategories", type: "check" },
      { textKey: "monthlyReports", type: "check" },
      { textKey: "mobileApp", type: "check" },
    ],
  },
  {
    type: "Pro",
    monthlyPrice: "$9.99",
    yearlyPrice: "$79",
    billingKey: "billingMonthly",
    isPopular: true,
    buttonTextKey: "buttonText",
    features: [
      { textKey: "unlimitedTransactions", type: "check" },
      { textKey: "advancedAnalytics", type: "check" },
      { textKey: "customCategories", type: "check" },
      { textKey: "budgetGoals", type: "check" },
      { textKey: "exportCSV", type: "check" },
      { textKey: "prioritySupport", type: "check" },
    ],
  },
  {
    type: "Business",
    monthlyPrice: "$19.99",
    yearlyPrice: "$79",
    billingKey: "billingMonthly",
    isPopular: false,
    buttonTextKey: "buttonText",
    features: [
      { textKey: "everythingInPro", type: "check" },
      { textKey: "teamCollab", type: "check" },
      { textKey: "multiCurrency", type: "check" },
      { textKey: "apiAccess", type: "check" },
      { textKey: "security", type: "check" },
      { textKey: "accountManager", type: "check" },
      { textKey: "support247", type: "check" },
    ],
  },
];

const PricingCard = ({ plan, isYearly }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");
  const isDarkMode = useDarkMode();

  const {
    type,
    monthlyPrice,
    yearlyPrice,
    billingKey,
    isPopular,
    buttonTextKey,
    features,
  } = plan;
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice;

  const isProPlan = type === "Pro";

  const isSpecialStyle = isDarkMode ? !isProPlan : isProPlan;
  const isProInDarkMode = isDarkMode && isProPlan;

  let cardBg, textColor, borderColor, headerBg, btnBg, btnText;

  if (isSpecialStyle) {
    cardBg = "var(--color-dark-blue-card)";
    textColor = "#ffffff";
    borderColor = "var(--color-dark-blue-card)";
    headerBg = "var(--color-dark-blue-header)";

    if (isDarkMode) {
      btnBg = "#000000";
      btnText = "#ffffff";
    } else {
      btnBg = "var(--color-light-gray-bg)";
      btnText = "var(--text-main)";
    }
  } else if (isProInDarkMode) {
    cardBg = "var(--color-light-gray-bg)";
    textColor = "#000000";
    borderColor = "var(--color-light-gray-bg)";
    headerBg = "rgba(0,0,0,0.05)";
    btnBg = "#000000";
    btnText = "#ffffff";
  } else {
    cardBg = "var(--bg-card)";
    textColor = "var(--text-main)";
    borderColor = "var(--color-card-border)";
    headerBg = "var(--bg-secondary)";
    btnBg = "var(--color-dark-blue-header)";
    btnText = "var(--text-inverse)";
  }

  return (
    <>
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          background: cardBg,
          color: textColor,
        }}
        dir={isArabic ? "rtl" : "ltr"}
        className={`relative flex flex-col rounded-xl border shadow-xl ${
          isArabic ? "rtl" : "ltr"
        }`}
      >
        <div
          className="absolute inset-0 rounded-xl pointer-events-none border"
          style={{ borderColor: borderColor }}
        ></div>
        {isPopular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full bg-yellow-300 text-black z-10">
            {t("popular")}
          </div>
        )}

        <div
          className={`py-6 px-8 rounded-t-xl`}
          style={{
            background: headerBg,
            color: textColor,
          }}
        >
          <Motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-semibold uppercase tracking-wider font-600"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            {t(type)}
          </Motion.h3>
        </div>

        <div
          className={`px-8 py-6 flex flex-col items-start ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl font-extrabold"
            style={{ color: textColor }}
          >
            {currentPrice}
          </Motion.div>
          <p
            className="mt-1 text-sm font-500"
            style={{
              fontFamily: "var(--font-primary)",
              color: textColor,
            }}
          >
            {t(billingKey)}
          </p>
        </div>

        <ul className="grow px-8 pb-8 space-y-3">
          {features.map((feature, index) => (
            <Motion.li
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-start text-sm font-600 ${
                isArabic ? "flex-row text-right" : "flex-row text-left"
              }`}
              style={{
                fontFamily: "var(--font-secondary)",
                color: textColor,
              }}
            >
              {feature.type === "check" && (
                <CheckIcon
                  className={`w-5 h-5 mt-0.5 ${
                    isArabic ? "ml-2" : "mr-2"
                  } text-green-500`}
                />
              )}
              <span className={isArabic ? "text-right" : "text-left"}>
                {t(feature.textKey)}
              </span>
            </Motion.li>
          ))}
        </ul>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-8 pt-0"
        >
          <button
            style={{
              backgroundColor: btnBg,
              color: btnText,
            }}
            className="w-full py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            {t(buttonTextKey)}
          </button>
        </Motion.div>
      </Motion.div>
    </>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");
  const isDarkMode = useDarkMode();

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className={`min-h-screen py-40 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300 ${
        isArabic ? "rtl" : "ltr"
      }`}
      style={{
        backgroundColor: isDarkMode ? "#111217" : "var(--bg-main)",
        color: "var(--text-main)",
      }}
    >
      <h1
        className="text-center mb-8 text-4xl"
        style={{ fontFamily: "var(--font-primary)", color: "var( --primary)" }}
      >
        Choose Your Spend Right Plan
      </h1>
      <p
        className="text-center mb-8 text-xl"
        style={{ fontFamily: "var(--font-secondary)", color: "var(--text-muted)" }}
      >
        start managing your finances smarter.Upgrade anytimes as your needs <br /> grow.
      </p>
      <div className="max-w-7xl mx-auto">
        <Motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-purple-950 rounded-lg p-1 relative">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                !isYearly
                  ? "bg-black text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("monthly")}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 relative ${
                isYearly
                  ? "bg-black text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("yearly")}
              <span
                className={`absolute -top-3 ${
                  isArabic ? "left-0" : "right-0"
                } px-2 py-0.5 text-[10px] text-black rounded-full bg-yellow-300 font-bold`}
              >
                {t("save20")}
              </span>
            </button>
          </div>
        </Motion.div>

        <Motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 xl:gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.type} plan={plan} isYearly={isYearly} />
          ))}
        </Motion.div>
      </div>
    </Motion.div>
  );
};
export default Pricing;
