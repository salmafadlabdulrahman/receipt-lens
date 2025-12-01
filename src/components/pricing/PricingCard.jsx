
import React from "react";
import { motion as Motion } from "framer-motion";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import useDarkMode from "../pricing/useDarkMode";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ plan, isYearly }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");
  const isDarkMode = useDarkMode();
  const navigate = useNavigate();

  const handleSelectPlan = () => {
    navigate(
      `/checkout?plan=${plan.type}&billing=${isYearly ? "yearly" : "monthly"}`
    );
  };
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
            onClick={handleSelectPlan}
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
export default PricingCard;
