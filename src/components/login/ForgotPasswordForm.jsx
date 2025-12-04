import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../common/InputField.jsx";
import PrimaryButton from "../common/PrimaryButton.jsx";

const ForgotPasswordForm = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError(t("email_required"));
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError(t("email_invalid"));
      return;
    }

    setIsLoading(true);

    try {
      console.log(email);

      await new Promise((resolve) => setTimeout(resolve, 1500)); 

      alert(t("reset_link_sent", { email }));
    } catch (err) {
      console.log(err);
      setError(t("something_went_wrong"));
    } finally {
      setIsLoading(false);
    }
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
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <PrimaryButton type="submit" disabled={isLoading} fullWidth={true}>
          {isLoading ? t("sending") : t("send_reset_link")}
        </PrimaryButton>
      </form>

      <p className="mt-4 text-center text-sm text-gray-500">
        {t("back_to_login_text")}
        <a
          href="/Login"
          className="font-700 font-bold ml-1"
          style={{
            color: "var(--text-main)",
            fontFamily: "var(--font-primary)",
          }}
        >
          {t("back_to_login")}
        </a>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
