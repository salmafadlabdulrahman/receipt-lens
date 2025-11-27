import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import useDarkMode from "../../components/pricing/useDarkMode";
import { plans } from "../../components/pricing/plansData";
import PricingCard from "../../components/pricing/PricingCard";
import ToggleBilling from "../../components/pricing/ToggleBilling";

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
        style={{ fontFamily: "var(--font-primary)", color: "var(--primary)" }}
      >
        {t("choosePlan")}{" "}
      </h1>

      <p
        className="text-center mb-8 text-xl"
        style={{
          fontFamily: "var(--font-secondary)",
          color: "var(--text-muted)",
        }}
      >
        {t("startManaging")}
      </p>

      <ToggleBilling isYearly={isYearly} setIsYearly={setIsYearly} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.type} plan={plan} isYearly={isYearly} />
        ))}
      </div>
    </Motion.div>
  );
};

export default Pricing;
