import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useAppContext();

  return (
    <footer
      className={`text-center mt-[10em] pb-[2em] ${
        theme === "light" ? "bg-white" : "bg-[#111217] text-white"
      }`}
    >
      <span
        className={`block p-[.1px] ${
          theme === "dark" ? "bg-[#2c2c2c]" : "bg-[#d1d1d1]"
        }`}
      ></span>
      <div className="pt-[2em]">
        <p className="font-semibold text-[1.2em]">
          Spend <span className="logo-span">Right</span>
        </p>
        <p className="mt-[1em]">
          <Link to={"/contact"}>{t("nav_contact")}</Link> •{" "}
          <Link to={"/about"}>{t("nav_about")}</Link> •{" "}
          <Link to={"/receipts"}>{t("recent_receipts_footer")}</Link>
        </p>
        <p className="mt-[1.5em] font-semibold text-[.8em]">
          &copy; 2025 spendright Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
