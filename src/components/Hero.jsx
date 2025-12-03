import { useTranslation } from "react-i18next";
import phoneImgLg from "/app-3.png";
import phoneImgSm from "/phone-img.png";
import { useAppContext } from "../contexts/useAppContext";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { PointerHighlight } from "./ui/pointer-highlight";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useAppContext();
  const isArabic = i18n.language === "ar";

  return (
    <section
      className={`px-[1em] pt-[12em] lg:text-left lg:flex justify-center items-center gap-[10em] lg:px-[3em] lg:pb-[6em] ${
        theme === "light"
          ? "bg-linear-to-br from-purple-soft via-purple-light via-pink-pastel to-yellow-soft"
          : "bg-linear-to-r  from-[#0029FF] via-purple-mid via-purple-medium via-purple-warm to-pink-pastel"
      } `}
    >
      <div className="text-center lg:text-left">
        {isArabic ? (
          <h1 className="font-semibold md:text-[3em] text-[2.4em] leading-[1.2em] lg:text-right lg:text-[3em]">
            {t("home_header")}
          </h1>
        ) : (
          <h1
            className={`font-semibold md:text-[3em] text-[2.2em] leading-[1.2em] lg:text-[3.5em] ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            {t("home_header")} <br />
            {t("home_second_part")}{" "}
            <span className="inline-block">
              <PointerHighlight>
                <span
                  className={`${
                    theme === "light" ? "text-white" : "text-black"
                  }`}
                >
                  {t("home_third_part")}
                </span>
              </PointerHighlight>
            </span>
          </h1>
        )}
        <p
          className={`mt-[1.5em] max-w-[500px] m-auto font-medium lg:m-0 lg:mt-[1.5em] lg:text-[1.2em] lg:max-w-[550px] ${
            isArabic
              ? "text-[1.5em] md:text-[2em] lg:text-right lg:text-[2em]"
              : `${theme === "light" ? "text-black" : "text-white"}`
          }`}
        >
          {t("home_subtitle")}
        </p>
        <div className="my-[3em] flex flex-wrap justify-center gap-[1.5em] lg:justify-start">
          <Link to={"/receipts"}>
            <button className="w-40 py-[.8em] px-[1.9em] cursor-pointer rounded-md border-2 border-black uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
              {t("start_btn")}
            </button>
          </Link>

          <Link to={"/about"}>
            <button className="w-40 py-[.8em] px-[1.9em] cursor-pointer rounded-md border-2 border-black uppercase text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
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
