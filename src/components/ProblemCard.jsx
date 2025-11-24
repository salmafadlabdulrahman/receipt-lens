import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";

const ProblemCard = ({ title, description, icon }) => {
  const { theme } = useAppContext();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div
      className={`
        flex flex-wrap items-center gap-[1em] mb-[1.5em] p-6 rounded-xl 
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        ${theme === "dark" ? "text-white bg-dark-gray" : "text-black bg-white"}
      `}
      style={{
        border: "2px solid transparent",
        borderBottom: "8px solid transparent",

        backgroundImage:
          theme === "dark"
            ? "linear-gradient(#111217, #111217), linear-gradient(to right, #0029FF, #8960ff, #af7eff)"
            : "linear-gradient(white, white), linear-gradient(to right, #8960ff, #a09afd, #eaafff)",

        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <div className={`${isArabic ? "" : ""}`}>{icon}</div>

      <div className={`h-[170px]  ${isArabic ? "text-right" : ""}`}>
        <p className={`font-semibold ${isArabic ? "text-[1.5em]" : ""}`}>
          {title}
        </p>
        <p
          className={`mt-[.5em] text-[.9em] ${isArabic ? "text-[1.1em]" : ""}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProblemCard;
