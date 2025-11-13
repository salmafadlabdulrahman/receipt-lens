import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../common/InputField.jsx";
import PrimaryButton from "../common/PrimaryButton.jsx";

const ForgotPasswordForm = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Sending reset link to:", email);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    alert(t("reset_link_sent", { email }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-5">
        {t("forgot_password_title")}
      </h2>
      {/* <p className="text-sm text-center text-gray-500">
        {t("forgot_password_subtitle")}
      </p> */}

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label={t("email_address")}
          type="email"
          name="email"
          placeholder={t("email_placeholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <PrimaryButton type="submit" disabled={isLoading} fullWidth={true}>
          {isLoading ? t("sending") : t("send_reset_link")}
        </PrimaryButton>
      </form>

      <p className="mt-4 text-center text-sm text-gray-500">
        {t("back_to_login_text")}{" "}
        <a
          href="/"
          className="text-purple-600 hover:text-purple-700 font-medium ml-1"
        >
          {t("back_to_login")}
        </a>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
