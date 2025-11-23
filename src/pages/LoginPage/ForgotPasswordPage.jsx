import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import ForgotPasswordForm from "../../components/login/ForgotPasswordForm";
import SocialLoginButtons from "../../components/login/SocialLoginButtons";
import { useTranslation } from "react-i18next";
import HeaderLogo from "../../components/login/HeaderLogo";
import { useAppContext } from "../../contexts/useAppContext";

const ForgotPassword = () => {
  const { t } = useTranslation();
  const { theme } = useAppContext(); 

  return (
    <div
      className={`min-h-screen flex items-center justify-center overflow-hidden relative 
      ${theme === "dark" ? "bg-[#121212] text-white" : "bg-[#fff] text-black"}
      `}
    >
      <div className="w-full max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-center gap-20 relative z-10">
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 max-w-md"
        >
          <HeaderLogo />

          <Link
            to="/login"
            className={`inline-flex items-center text-sm mb-6 transition-colors
            ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-900"}
            `}
          >
            <ChevronLeft size={16} className="mr-1" />
            {t("back_to_login")}
          </Link>

          <h1
            className="text-4xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-primary)",
              color: theme === "dark" ? "var(--text-main)" : "var(--text-main)",
            }}
          >
            {t("forgot_password_title")}
          </h1>

          <p
            className="mb-8 leading-relaxed"
            style={{
              fontFamily: "var(--font-secondary)",
              color: theme === "dark" ? "var(--text-muted-dark)" : "var(--text-muted)",
            }}
          >
            {t("forgot_password_subtitle")}
          </p>

          <ForgotPasswordForm />

          <div className="flex items-center my-8">
            <hr
              className={`grow 
              ${theme === "dark" ? "border-gray-100" : "border-gray-300"}
              `}
            />
            <span
              className="px-4 text-sm font-medium"
              style={{
                fontFamily: "var(--font-primary)",
                color: theme === "dark" ? "var(--text-main)" : "var(--text-main)",
              }}
            >
              {t("or_continue_with")}
            </span>
            <hr
              className={`grow 
              ${theme === "dark" ? "border-gray-100" : "border-gray-300"}
              `}
            />
          </div>

          <SocialLoginButtons />
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex w-full md:w-1/2 justify-center items-center"
        >
          <div
            className={`relative w-full aspect-square max-w-[500px] rounded-3xl p-8 flex items-center justify-center
            ${theme === "dark" ? "bg-[#0c0d1b]" : "bg-gray-100/50"}
            `}
          >
            <img
              src="https://i.pinimg.com/1200x/81/fb/b4/81fbb492e2d4f9c44ae4da64326e8dad.jpg"
              alt="Security Illustration"
              className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;
