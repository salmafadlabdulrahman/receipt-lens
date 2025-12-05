import React from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";
export default function About() {
  const { t } = useTranslation();

  const { theme } = useAppContext();

  const features = [
    {
      title: t("about_feature_scan_title"),
      desc: t("about_feature_scan_desc"),
    },
    {
      title: t("about_feature_advisor_title"),
      desc: t("about_feature_advisor_desc"),
    },
    {
      title: t("about_feature_analytics_title"),
      desc: t("about_feature_analytics_desc"),
    },
    {
      title: t("about_feature_storage_title"),
      desc: t("about_feature_storage_desc"),
    },
  ];

  return (
    <div>
      <section
        className={` py-28 px-10  from-50 
        ${
          theme === "light"
            ? "bg-linear-to-br from-purple-soft via-purple-light to-yellow-soft"
            : "bg-linear-to-r  from-[#0029FF] via-purple-mid via-purple-medium via-purple-warm to-pink-pastel"
        }
        `}
        id="about"
      >
        <div
          className={`w-16 h-16 mx-auto mb-6 bg-transparent rounded-xl flex items-center justify-center`}
        >
          <span className="bg-transparent text-3xl">🧾</span>
        </div>
        <h1 className="text-4xl text-center font-bold mb-4">
          {t("about_hero_title")}
        </h1>
        <p className={`max-w-3xl mx-auto text-gray-900 text-lg`}>
          {t("about_hero_desc")}
        </p>
      </section>

      <section className="py-20 text-center" id="features">
        <h2
          className={`text-3xl font-bold mb-3
          ${theme === "dark" ? "text-white" : "text-black "}
          `}
        >
          {t("about_core_features_title")}
        </h2>
        <p className={`text-gray-400 mb-14 `}>
          {t("about_core_features_desc")}
        </p>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6
          ${
            theme === "dark" ? "text-white bg-dark-gray" : "text-black bg-white"
          }
          `}
        >
          {features.map((f) => (
            <div
              key={f.title}
              className={`rounded-xl p-6 shadow-sm hover:shadow-md transition ${
                theme === "dark"
                  ? "text-white bg-medium-gray"
                  : "text-black bg-purple-50"
              }`}
            >
              <div className="w-10 mx-auto bg-purple-200 text-purple-600 rounded-lg mb-4 flex items-center justify-center text-lg">
                🧩
              </div>
              <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
              <p
                className={`text-sm 
               whitespace-pre-line
              ${theme === "dark" ? "text-gray-400 " : "text-gray-400 "}
               `}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`py-24 
          ${
            theme === "dark"
              ? "text-white bg-medium-gray"
              : "text-black bg-purple-50"
          }
        `}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <div>
            <p className="text-xs font-semibold text-purple-500 mb-2">
              {t("about_vision_label")}
            </p>
            <h3 className={`text-3xl font-bold mb-6 `}>
              {t("about_vision_heading")}
            </h3>
            <p
              className={` mb-6 ${
                theme === "dark" ? "text-gray-400 " : "text-gray-400 "
              }`}
            >
              {t("about_vision_desc")}
            </p>

            <div className={`flex gap-10 text-sm text-gray-700 `}>
              <div>
                <div className="text-purple-600 text-lg mb-1">⚙️</div>
                <p
                  className={`font-medium ${
                    theme === "dark" ? "text-gray-400 " : "text-gray-400 "
                  }`}
                >
                  {t("about_vision_ai")}
                </p>
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-gray-400 " : "text-gray-400 "
                  }`}
                >
                  {t("about_ai_sub")}
                </p>
              </div>

              <div>
                <div className="text-purple-600 text-lg mb-1">🔄</div>
                <p
                  className={`font-medium ${
                    theme === "dark" ? "text-gray-400 " : "text-gray-400 "
                  }`}
                >
                  {t("about_vision_sync")}
                </p>
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-gray-400 " : "text-gray-400 "
                  }`}
                >
                  {t("about_sync_sub")}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-black h-72 flex items-center justify-center">
            <span className="text-white opacity-80">
              {t("about_analytics_dashboard")}
            </span>
          </div>
        </div>
      </section>

      <section
        className={` py-20 bg-gradient-to-r from-purple-600 to-purple-500 text-white`}
      >
        <h3 className="text-3xl font-bold mb-4 text-center">
          {t("about_cta_heading")}
        </h3>
        <p className="mb-8 text-center">{t("about_cta_sub")}</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
            {t("about_cta_start")}
          </button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition ">
            {t("about_cta_learn")}
          </button>
        </div>
      </section>
    </div>
  );
}
