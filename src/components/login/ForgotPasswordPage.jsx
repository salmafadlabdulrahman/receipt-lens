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
          href="/Login"
          className="font-700 font-bold ml-1 "style={{color:"var( --text-main)",fontFamily:"var(--font-primary)"}}
        >
          {t("back_to_login")}
        </a>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
