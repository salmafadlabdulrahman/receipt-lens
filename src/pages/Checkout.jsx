import React from "react";
import { useLocation } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import useDarkMode from "../components/pricing/useDarkMode";
import CheckoutForm from "../components/pricing/CheckoutForm";
import { plans } from "../components/pricing/plansData";
import { useTranslation } from "react-i18next";

const CheckoutPage = () => {
  const isDarkMode = useDarkMode();
  const { search } = useLocation();
  const { t, i18n } = useTranslation();

  const query = new URLSearchParams(search);

  const selectedPlan = query.get("plan") || "Pro";
  const billing = query.get("billing") || "monthly";

  const isYearly = billing === "yearly";

  const plan = plans.find((p) => p.type === selectedPlan);
  const isArabic = i18n.language.startsWith("ar");

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen font-sans transition-colors duration-300 pb-[3em] pt-[6em] py-30"
      style={{ backgroundColor: isDarkMode ? "#111217" : "var(--bg-main)" }}
    >
      <div
        className={`h-42  py-18 w-full flex items-center justify-center 
    ${
      isDarkMode
        ? "bg-gradient-to-r from-[#0029FF] via-purple-600 to-pink-400"
        : "bg-linear-to-br from-purple-pastel via-light-pastel-purple to-light-blue "
    }
  `}
      >
        <h2
          className={`font-bold text-4xl ${
            isDarkMode ? "text-white" : " text-black"
          }`}
          style={{ fontFamily: "var(--font-primary)" }}
        >
          {t("checkout")}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-4 sm:px-6">
        <div className="flex-1 lg:w-96 pt-15">
          <CheckoutForm plan={plan} isYearly={isYearly} />
        </div>

        <div className="flex-1 space-y-6 pt-15">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`p-6 py-10 rounded-xl shadow-md ${
              isDarkMode ? "text-white" : "bg-white text-black"
            }`}
          >
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              {t(plan.type)} {t("plan")}
            </h2>

            <p className="mt-3 font-bold text-lg">
              {t("total")}: {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            </p>

            <ul
              className="space-y-2"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              {plan.features.map((feat, idx) => (
                <li
                  key={idx}
                  className={`flex items-center ${
                    isArabic ? "flex-row" : "flex-row"
                  }`}
                >
                  <span
                    className={`w-4 h-4 bg-green-500 rounded-full mt-1 ${
                      isArabic ? "ml-3" : "mr-3"
                    }`}
                  ></span>
                  {t(feat.textKey)}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg ">
              <h3
                className="font-semibold mb-2"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                {t("planSummary")}
              </h3>

              <p>
                <span className="font-medium">{t("planType")}:</span>{" "}
                {t(plan.type)}
              </p>

              <p>
                <span className="font-medium">{t("billingPeriod")}:</span>{" "}
                {isYearly ? t("yearly") : t("monthly")}
              </p>

              <p
                className="mt-2 font-bold text-lg"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                {t("total")}: {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </p>
            </div>
          </Motion.div>
        </div>
      </div>
    </Motion.div>
  );
};

export default CheckoutPage;
