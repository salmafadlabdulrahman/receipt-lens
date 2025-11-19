import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

const plans = [
  {
    type: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$15",
    billingKey: "perfectForStarting",
    isPopular: false,
    buttonTextKey: "buttonText",
    buttonInfoKey: "buttonInfo",
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
    buttonInfoKey: "buttonInfo",
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
    buttonInfoKey: "buttonInfo",
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
  const isProfessional = type === "Pro";

  const isArabic = i18n.language.startsWith("ar");

  const cardStyle = isProfessional
    ? { background: "var(--color-dark-blue-card)", color: "white" }
    : { background: "white" };
  const cardBorder = isProfessional
    ? "border-[var(--color-dark-blue-card)]"
    : "border-[var(--color-card-border)]";

  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={cardStyle}
      className={`relative flex flex-col rounded-xl border ${cardBorder} shadow-xl ${
        isArabic ? "rtl" : "ltr"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full bg-yellow-300 text-black">
          {t("popular")}
        </div>
      )}

      <div
        className={`py-6 px-8 rounded-t-xl ${
          isProfessional ? "text-white" : "text-gray-600"
        }`}
        style={{
          background: isProfessional
            ? "var(--color-dark-blue-header)"
            : "var(--bg-secondary)",
        }}
      >
        <Motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-semibold uppercase tracking-wider font-600"
          style={{
            fontFamily: "var(--font-primary)",
            color: isProfessional ? "var(--text-inverse)" : "var(--text-main)",
          }}
        >
          {t(type)}
        </Motion.h3>
      </div>

      <div
        className={`px-8 py-6 flex flex-col ${
          isArabic ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-extrabold"
        >
          {currentPrice}
        </Motion.div>
        <p
          className="mt-1 text-sm font-500"
          style={{
            fontFamily: "var(--font-primary)",
            color: isProfessional ? "var(--text-inverse)" : "var(--text-main)",
          }}
        >
          {t(billingKey)}
        </p>
      </div>

      <ul className={`grow px-8 pb-8 space-y-3`}>
        {features.map((feature, index) => (
          <Motion.li
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{
              fontFamily: "var(--font-secondary)",
              color: isProfessional
                ? "var(--text-inverse)"
                : "var(--text-main)",
            }}
            className={`flex items-start text-sm font-600 ${
              isArabic ? "flex-row-reverse justify-end" : "flex-row"
            }`}
          >
            {feature.type === "check" && (
              <CheckIcon
                className={`w-5 h-5 text-green-500 mt-0.5 ${
                  isArabic ? "ml-2" : "mr-2"
                }`}
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
            backgroundColor: isProfessional
              ? "var( --color-light-gray-bg)"
              : "var(--color-dark-blue-header)",
            color: isProfessional ? "var(--text-main)" : "var(--text-inverse)",
          }}
          className="w-full py-3 rounded-lg font-semibold  hover:bg-opacity-90 transition-colors"
        >
          {t(buttonTextKey)}
        </button>
      </Motion.div>
    </Motion.div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans ${
        isArabic ? "rtl" : "ltr"
      }`}
    >
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
