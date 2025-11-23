import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ChevronLeft, MailCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import HeaderLogo from "./HeaderLogo";
import { useAppContext } from "../../contexts/useAppContext";

const ForgotPasswordSuccess = () => {
  const { t } = useTranslation();
  const { theme } = useAppContext();

  const textMain = theme === "dark" ? "text-white" : "text-black";
  const textMuted = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const textLink =
    theme === "dark"
      ? "text-[#9F55FF] hover:text-[#BB86FC]"
      : "text-[#9F55FF] hover:text-[#b98adf]";
  const bgButton =
    theme === "dark"
      ? "bg-[#9F55FF] hover:bg-[#BB86FC]"
      : "bg-[#9F55FF] hover:bg-[#b98adf]";
  const shadowButton =
    theme === "dark" ? "shadow-purple-500/30" : "shadow-blue-500/30";
  const bgRight = theme === "dark" ? "bg-white/5" : "bg-gray-100/50";

  return (
    <div
      className={`min-h-screen flex items-center justify-center overflow-hidden relative transition-colors duration-300 ${
        theme === "dark" ? "bg-[#111217]" : "bg-white"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-center gap-20 relative z-10">
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 max-w-md"
        >
          <HeaderLogo className={textMain} />

          <Link
            to="/login"
            className={`inline-flex items-center text-sm mb-6 transition-colors ${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <ChevronLeft size={16} className="mr-1" />
            {t("back_to_login")}
          </Link>

          <Motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex items-center justify-start mb-6"
          >
            <MailCheck size={48} className="text-green-500" />
          </Motion.div>

          <h1
            className={`text-4xl font-bold mb-3 ${textMain}`}
            style={{ fontFamily: "var(--font-primary)" }}
          >
            {t("check_your_email_title")}
          </h1>

          <p
            className={`mb-8 leading-relaxed ${textMuted}`}
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            {t("check_your_email_subtitle")}
          </p>

          <p className={`text-sm mb-6 ${textMuted}`}>
            {t("email_not_received_prompt")}
            <Link
              to="/forgot-password"
              className={`ml-1 font-medium transition-colors ${textLink}`}
            >
              {t("resend_link")}
            </Link>
          </p>

          <Link to="/login">
            <button
              type="button"
              className={`w-full ${bgButton} ${shadowButton} text-white font-semibold py-3.5 rounded-lg transition-all duration-300 active:scale-[0.98]`}
            >
              {t("back_to_login_button")}
            </button>
          </Link>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex w-full md:w-1/2 justify-center items-center"
        >
          <div
            className={`relative w-full aspect-square max-w-[500px] rounded-3xl p-8 flex items-center justify-center transition-colors duration-300 ${bgRight}`}
          >
            <img
              src="https://i.pinimg.com/1200x/81/fb/b4/81fbb492e2d4f9c44ae4da64326e8dad.jpg"
              alt="Email Sent Illustration"
              className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default ForgotPasswordSuccess;
