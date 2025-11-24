import ProblemCard from "./ProblemCard";
import { useAppContext } from "../contexts/useAppContext";
import { useTranslation } from "react-i18next";
import { cardsContent } from "../utils/cardsContent";

const MillionReceipts = () => {
  const { theme } = useAppContext();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className="text-center mt-[5em] w-[90%] m-auto">
      <section>
        <p
          className={`text-purple-mid text-[1.5em] font-medium ${
            isArabic ? "text-[1.8em]" : ""
          } `}
        >
          {t("problem")}
        </p>
        <h3
          className={`mt-[.5em] font-semibold text-[2.2em] leading-[1.2em] tracking-tight ${
            theme === "dark" ? "text-white" : "text-medium-gray"
          } ${isArabic ? "text-[2.5em]" : ""}`}
        >
          {t("problem_title")}
        </h3>
        <p
          className={`mt-[.7em] font-medium ${
            theme === "dark" ? "text-warm-gray" : "text-medium-gray"
          } ${isArabic ? "text-[1.3em]" : ""}`}
        >
          {t("problem_subtitle")}
        </p>
      </section>

      <section className="mt-[3em] flex flex-wrap justify-center gap-3">
        {cardsContent.map((card, index) => (
          <div className="w-[300px] h-[300px] text-left" key={index}>
            <ProblemCard
              title={t(card.title)}
              description={t(card.description)}
              icon={card.icon}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default MillionReceipts;
