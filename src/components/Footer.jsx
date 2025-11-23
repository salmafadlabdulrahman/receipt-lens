import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useAppContext();

  return (
    <footer
      className={`text-center mt-[6em] pb-[2em] ${
        theme === "light" ? "bg-white" : "bg-dark-gray text-white"
      }`}
    >
      <span
        className={`block p-[.1px] ${
          theme === "dark" ? "bg-medium-gray" : "bg-light-gray"
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
