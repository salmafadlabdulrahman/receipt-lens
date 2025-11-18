import React from "react";
import { useTranslation } from "react-i18next";
import {
  CheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const PaymentSuccessPage = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language.startsWith("ar");
  const textDirectionClass = isArabic ? "rtl" : "ltr";
  const flexDirectionClass = isArabic ? "rtl" : "ltr";
  const startMarginClass = isArabic ? "mr" : "ml";

  const formatNumber = (num) => {
    if (isArabic) {
      const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
      return num
        .toString()
        .split("")
        .map((d) => arabicDigits[d] ?? d)
        .join("");
    }
    return num;
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 font-sans ${textDirectionClass}`}
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div
        className="max-w-md w-full mx-auto rounded-xl shadow-2xl py-12 px-6"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="flex justify-center mb-8">
          <div
            className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "var(--color-success-green)" }}
          >
            <CheckIcon className="w-12 h-12 text-white" />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {t("payment_success_title")}
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            {t("payment_success_subtitle")}
          </p>
        </div>

        <div
          className="border rounded-xl p-6 mb-8 shadow-sm"
          style={{
            borderColor: "var(--color-secondary-purple)",
            backgroundColor: "var(--bg-main)",
          }}
        >
          <ul className="space-y-3 text-sm ">
            <li
              className={`flex items-center text-lg font-medium ${flexDirectionClass}`}
              style={{ color: "var(--text-primary)" }}
            >
              <CheckIcon
                className={`w-5 h-5 text-purple-600 ${startMarginClass}-5 pe-1.5`}
              />
              Pro Plan{" "}
            </li>
            <li
              className={`flex items-center ${flexDirectionClass}`}
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className={`w-2 h-2 rounded-full bg-gray-400 ${startMarginClass}-5 me-1.5`}
              ></span>
              {t("billing_starts_today")}
            </li>
            <li
              className={`flex items-center ${flexDirectionClass}`}
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className={`w-2 h-2 rounded-full bg-gray-400 ${startMarginClass}-5 me-1.5`}
              ></span>
              {t("confirmation_email_sent")}
            </li>
          </ul>
        </div>

        <div
          className="rounded-xl p-6 mb-10 shadow-md"
          style={{ backgroundColor: "var(--bg-alt)" }}
        >
          <h2
            className="text-lg font-semibold text-center mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {t("whats_next_title")}
          </h2>
          <ol className="space-y-6 ">
            {[1, 2, 3].map((num) => (
              <li
                key={num}
                className={`flex items-start ${flexDirectionClass}`}
              >
                <div
                  className={`me-1.5 shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm ${startMarginClass}-4`}
                  style={{
                    backgroundColor: "var(--color-primary-purple)",
                    direction: isArabic ? "rtl" : "ltr",
                    textAlign: isArabic ? "right" : "center",
                  }}
                >
                  {formatNumber(num)}
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t(`step${num}_title`)}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {t(`step${num}_subtitle`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            className={`flex-1 py-3 px-6 rounded-lg text-white font-semibold flex items-center justify-center ${flexDirectionClass}`}
            style={{ backgroundColor: "var(--color-primary-purple)" }}
          >
            <Squares2X2Icon className={`w-5 h-5 ${startMarginClass}-2`} />
            {t("button_go_to_dashboard")}
          </button>
          <button
            className={`flex-1 py-3 px-6 rounded-lg border font-semibold flex items-center justify-center hover:bg-gray-50 ${flexDirectionClass}`}
            style={{
              color: "var(--text-secondary)",
              borderColor: "var(--border-color)",
            }}
          >
            <XMarkIcon className={`w-5 h-5 ${startMarginClass}-2`} />
            {t("button_view_cancel_page")}
          </button>
        </div>

        <div
          className="text-center text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          {t("need_help_prompt")}{" "}
          <a
            href="#"
            className="hover:underline"
            style={{ color: "var(--color-primary-purple)" }}
          >
            {t("link_contact_support")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
