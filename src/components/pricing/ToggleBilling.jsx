import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";

const ToggleBilling = ({ isYearly, setIsYearly }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");

  return (
    <Motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex justify-center mb-16"
    >
      <div className="flex bg-purple-950 rounded-lg p-1 relative">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-8 py-3 rounded-lg text-sm font-semibold ${
            !isYearly ? "bg-black text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {t("monthly")}
        </button>

        <button
          onClick={() => setIsYearly(true)}
          className={`px-8 py-3 rounded-lg text-sm font-semibold relative ${
            isYearly ? "bg-black text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {t("yearly")}

          <span
            className={`absolute -top-3 ${
              isArabic ? "left-0" : "right-0"
            } px-2 py-0.5 text-[10px] text-black rounded-full bg-yellow-300 font-bold`}
          >
            {t("save20")}
          </span>
        </button>
      </div>
    </Motion.div>
  );
};

export default ToggleBilling;
