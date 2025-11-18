import { useTranslation } from "react-i18next";
import phoneImg from "/phone-img.png";
import { useAppContext } from "../contexts/useAppContext";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useAppContext();
  const isArabic = i18n.language === "ar";

  return (
    <section
      className={` ${
        theme === "light"
          ? "bg-linear-to-br from-[#b26eea] via-[#a09afd] to-[#ffe791]"
          : "bg-linear-to-r  from-[#0029FF] via-[#8960FF] via-[#AF7EFF] via-[#A661FF] to-[#EAAFFF]"
      } md:text-center`}
    >
      <div className="md:w-[70%] m-auto pt-[6em] w-[90%]">
        {isArabic ? (
          <h1 className="font-semibold md:text-[3em] text-[2.4em] leading-[1.2em]">
            {t("home_header")}
          </h1>
        ) : (
          <h1 className="font-semibold md:text-[3em] text-[2.2em] leading-[1.2em]">
            {t("home_header")} <br />
            {t("home_second_part")}{" "}
            <span className="text-white">{t("home_third_part")}</span>
          </h1>
        )}
        <p
          className={`md:m-auto md:mt-[2em] mt-[2em] font-medium md:text-[1.2em] leading-[1.5em] max-w-[600px] ${
            isArabic ? "text-[1.5em] md:text-[2em]" : ""
          }`}
        >
          {t("home_subtitle")}
        </p>
        <div className="mt-[3em] justify-center flex flex-wrap gap-[1.5em]">
          <button className="border border-black rounded-4xl py-[.8em] px-[1.9em] cursor-pointer hover:bg-white hover:text-black">
            {t("start_btn")}
          </button>
          <button className="border border-black rounded-4xl py-[.8em] px-[1.9em] cursor-pointer bg-black text-white">
            {t("explore_btn")}
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-[5em]">
        <img src={phoneImg} alt="an image of a phone" />
      </div>
    </section>
  );
};

export default Hero;
