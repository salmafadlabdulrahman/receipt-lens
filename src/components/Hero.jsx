import { useTranslation } from "react-i18next";
import phoneImgLg from "/app-3.png";
import phoneImgSm from "/phone-img.png";
import { useAppContext } from "../contexts/useAppContext";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useAppContext();
  const isArabic = i18n.language === "ar";

  return (
    <section
      className={`px-[1em] lg:text-left pt-[5em] lg:flex justify-center items-center gap-[10em] lg:px-[3em] lg:pb-[6em] ${
        theme === "light"
          ? "bg-linear-to-br from-purple-soft via-purple-light via-pink-pastel to-yellow-soft"
          : "bg-linear-to-r  from-[#0029FF] via-purple-mid via-purple-medium via-purple-warm to-pink-pastel"
      } `}
    >
      <div className="text-center lg:text-left">
        {isArabic ? (
          <h1 className="font-semibold md:text-[3em] text-[2.4em] leading-[1.2em]">
            {t("home_header")}
          </h1>
        ) : (
          <h1 className="font-semibold md:text-[3em] text-[2.2em] leading-[1.2em] lg:text-[3.5em]">
            {t("home_header")} <br />
            {t("home_second_part")}{" "}
            <span className="text-white">{t("home_third_part")}</span>
          </h1>
        )}
        <p
          className={`mt-[1.5em] max-w-[500px] m-auto font-medium lg:m-0 lg:mt-[1.5em] lg:text-[1.2em] lg:max-w-[550px] ${
            isArabic ? "text-[1.5em] md:text-[2em]" : ""
          }`}
        >
          {t("home_subtitle")}
        </p>
        <div className="my-[3em] flex flex-wrap justify-center gap-[1.5em] lg:justify-start">
          <Link to={"/receipts"}>
            <button className="border border-black rounded-4xl py-[.8em] px-[1.9em] cursor-pointer hover:bg-white hover:text-black">
              {t("start_btn")}
            </button>
          </Link>

          <Link to={"/about"}>
            <button className="border border-black rounded-4xl py-[.8em] px-[1.9em] cursor-pointer bg-black text-white">
              {t("explore_btn")}
            </button>
          </Link>
        </div>
      </div>

      <Motion.img
        src={phoneImgLg}
        alt="App"
        className="hidden lg:block w-[300px]"
        initial={{ y: 0 }}
        animate={{ y: -15 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="flex justify-center mt-[5em] lg:hidden">
        <img src={phoneImgSm} alt="an image of a phone" />
      </div>
    </section>
  );
};

export default Hero;
