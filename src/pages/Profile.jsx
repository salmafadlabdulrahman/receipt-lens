import React from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";
import { motion as Motion } from "framer-motion";
import { User, Mail, Lock, Edit2, LogOut, Camera } from "lucide-react";

const Profile = () => {
  const { t } = useTranslation();
  const { theme } = useAppContext();
  const isDark = theme === "dark";

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`min-h-screen  py-5 px-4 pt-[10em] transition-colors duration-300 ${
        isDark ? "bg-dark-gray" : "bg-white"
      }`}
    >
      {" "}
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto bg-"
      >
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 border 
          ${
            isDark
              ? "bg-dark-gray border-white/10 shadow-purple-900/20"
              : "bg-[linear-gradient(to right, #b550d0, #7f00ff)] border-gray-100 shadow-xl"
          }`}
        >
          <div
            className={`h-32 w-full ${
              isDark
                ? "bg-linear-to-r  from-[#0029FF] via-purple-mid via-purple-medium via-purple-warm to-pink-pastel"
                : "bg-linear-to-br from-purple-soft via-purple-light to-yellow-soft"
            }`}
          ></div>

          <div className="px-8 pb-8">
            <div className="relative -mt-16 mb-6 flex justify-between items-end">
              <div className="relative">
                <div
                  className={`w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold border-4 shadow-lg
                  ${
                    isDark
                      ? "bg-dark-gray border-dark-gray text-white"
                      : "bg-white border-white text-gray-800"
                  }`}
                >
                  J
                </div>
                {/* <button className={`absolute bottom-0 right-0 p-2 rounded-full shadow-md transition-transform hover:scale-110
                  ${isDark ? "bg-[#9F55FF] text-white" : "bg-gray-900 text-white"}`}>
                  <Camera size={16} />
                </button> */}
              </div>

              {/* <button 
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all
                ${isDark 
                  ? "bg-white/10 hover:bg-white/20 text-white border border-white/10" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <Edit2 size={16} />
                <span>{t("edit_profile") || "Edit"}</span>
              </button> */}
            </div>

            <div className="mb-8">
              <h2
                className={`text-3xl font-bold mb-1 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                John Doe
              </h2>
            </div>

            <div className="space-y-6">
              <div className="group">
                <label
                  className={`block text-sm font-medium mb-2 ml-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {t("name")}
                </label>
                <div
                  className={`flex items-center p-4 rounded-xl border transition-all duration-300
                  ${
                    isDark
                      ? "bg-white/5 border-white/10 group-hover:border-[#9F55FF]/50 text-white"
                      : "bg-gray-50 border-gray-200 group-hover:border-purple-300 text-gray-900"
                  }`}
                >
                  <User
                    className={`mr-4 ${
                      isDark ? "text-[#9F55FF]" : "text-gray-400"
                    }`}
                    size={20}
                  />
                  <span className="font-semibold flex-1">John Doe</span>
                </div>
              </div>

              <div className="group">
                <label
                  className={`block text-sm font-medium mb-2 ml-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {t("contact_email")}
                </label>
                <div
                  className={`flex items-center p-4 rounded-xl border transition-all duration-300
                  ${
                    isDark
                      ? "bg-white/5 border-white/10 group-hover:border-[#9F55FF]/50 text-white"
                      : "bg-gray-50 border-gray-200 group-hover:border-purple-300 text-gray-900"
                  }`}
                >
                  <Mail
                    className={`mr-4 ${
                      isDark ? "text-[#9F55FF]" : "text-gray-400"
                    }`}
                    size={20}
                  />
                  <span className="font-semibold flex-1">
                    johndoe@gmail.com
                  </span>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between items-center mb-2 ml-1">
                  <label
                    className={`block text-sm font-medium ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {t("password")}
                  </label>
                  {/* <button className={`text-xs hover:underline ${isDark ? "text-[#9F55FF]" : "text-purple-600"}`}>
                    {t("change_password") || "Change"}
                  </button> */}
                </div>
                <div
                  className={`flex items-center p-4 rounded-xl border transition-all duration-300
                  ${
                    isDark
                      ? "bg-white/5 border-white/10 group-hover:border-[#9F55FF]/50 text-white"
                      : "bg-gray-50 border-gray-200 group-hover:border-purple-300 text-gray-900"
                  }`}
                >
                  <Lock
                    className={`mr-4 ${
                      isDark ? "text-[#9F55FF]" : "text-gray-400"
                    }`}
                    size={20}
                  />
                  <span className="font-semibold flex-1 tracking-widest">
                    ••••••••••
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200/20">
              <a href="/login">
                <button
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300
                 ${
                   isDark
                     ? "bg-gradient-to-r from-[#0029FF] to-[#7f00ff] text-white hover:opacity-80"
                     : "bg-gradient-to-r from-[#b800d0] to-[#7f00ff] text-white hover:opacity-80"
                 }`}
                >
                  <LogOut size={20} />
                  <span>{t("logout") || "Sign Out"}</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </Motion.div>{" "}
    </section>
  );
};

export default Profile;
