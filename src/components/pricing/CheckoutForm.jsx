import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../contexts/useAppContext";

const CheckoutForm = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");
  const { theme } = useAppContext();

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

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = t("firstName_required");
    if (!formData.lastName) tempErrors.lastName = t("lastName_required");
    if (!formData.country) tempErrors.country = t("country_required");
    if (!formData.phone) tempErrors.phone = t("phone_required");
    else if (!/^\d+$/.test(formData.phone))
      tempErrors.phone = t("phone_invalid");
    if (!formData.email) tempErrors.email = t("email_required");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = t("email_invalid");

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      console.log(formData);
      
      await new Promise((resolve) => setTimeout(resolve, 1500)); 
      alert(`${t("subscriptionProcessedFor")} ${formData.firstName}`);
    } catch (err) {
      console.log(err);
      alert(t("something_went_wrong"));
    } finally {
      setIsLoading(false);
    }
  };

  const fields = [
    { label: t("firstName"), name: "firstName" },
    { label: t("lastName"), name: "lastName" },
    { label: t("phone"), name: "phone" },
    { label: t("emailAddress"), name: "email", type: "email" },
  ];

  return (
    <div
      className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
        isArabic ? "rtl" : "ltr"
      } ${theme === "dark" ? "text-white" : "text-black"}`}
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      <h2 className="text-2xl font-semibold mb-6">
        {t("billingDetails")}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="mb-1">{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className={`p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                theme === "dark" 
                  ? "text-white bg-dark-light-gray border-slate-600 placeholder:text-slate-400"
                  : "text-black bg-gray-50 border-gray-300"
              }`}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
          {isLoading ? t("processing") : t("subscribeNow")}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;