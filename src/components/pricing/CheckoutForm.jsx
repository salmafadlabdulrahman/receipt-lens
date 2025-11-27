import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../contexts/useAppContext";

const CheckoutForm = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${t("subscriptionProcessedFor")} ${formData.firstName}`);
  };
  const { theme } = useAppContext();

  return (
    <div
      className={`
        p-6 rounded-xl shadow-lg  transition-colors duration-300
        ${isArabic ? "rtl" : "ltr"}      ${
        theme === "dark" ? "text-white" : "text-black"
      }
`}
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      {" "}
      <h2
        className="text-2xl font-semibold mb-6"
        style={{ fontFamily: "var( --font-primary)" }}
      >
        {t("billingDetails")}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        style={{ fontFamily: "var( --font-secondary)" }}
      >
        {[
          { label: t("firstName"), name: "firstName" },
          { label: t("lastName"), name: "lastName" },
          { label: t("country"), name: "country" },
          { label: t("phone"), name: "phone" },
          { label: t("emailAddress"), name: "email", type: "email" },
        ].map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="mb-1">{field.label}</label>

            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className={`
        p-3 rounded-lg border border-gray-300 bg-gray-50
        focus:outline-none focus:ring-2 focus:ring-purple-500
        ${theme === "dark" ? "text-white" : "text-black"}
      `}
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
          {t("subscribeNow")}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
