import appleIcon from "/apple-icon.png";
import amazonIcon from "/amazon-icon.png";
import googleIcon from "/google-icon.png";
import NotificationUI from "./NotificationUI";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";

const StayNotified = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useAppContext();
  const isArabic = i18n.language === "ar";

  return (
    <section
      className={`mb-[5em] px-[2em] md:px-0 md:flex md:gap-[3em] md:items-center md:justify-center ${
        theme === "light" ? "text-black" : "bg-dark-gray text-white"
      }`}
    >
      <div>
        <span className="font-medium">{t("notifications")}</span>
        <h3 className="text-[2.5em] font-semibold">{t("stay_notified")}</h3>
        <p className={`max-w-[450px] ${isArabic ? "text-[1.3em]" : ""}`}>
          {t("notifications_subtitle")}
        </p>
      </div>

      <div className="notifications-container mt-[2em] flex flex-wrap gap-[2em] md:block">
        <NotificationUI
          img={appleIcon}
          company={"Apple"}
          category={"Electronics"}
          amount={500}
        />
        <NotificationUI
          img={amazonIcon}
          company={"Amazon"}
          category={"Shopping"}
          amount={150}
        />
        <NotificationUI
          img={googleIcon}
          company={"Google"}
          category={"Ads"}
          amount={70}
        />
      </div>
    </section>
  );
};

export default StayNotified;
