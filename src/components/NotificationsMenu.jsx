import { useAppContext } from "@/contexts/useAppContext";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotificationsMenu = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useAppContext();
  const isArabic = i18n.language === "ar";

  return (
    <section
      className={`${isArabic ? "left-0" : "right-3"} absolute ${
        theme === "light" ? "bg-white" : "bg-dark-gray"
      } top-27 rounded-md ml-[1em] max-h-[400px] overflow-y-auto`}
    >
      <section className="max-w-md mx-auto p-4 space-y-3">
        <div
          className={` ${
            theme === "light" ? "bg-white" : "bg-dark-gray"
          } border border-gray-200 rounded-lg p-4 shadow-sm`}
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎊</span>
            <div className="flex-1">
              <p
                className={`${
                  theme === "light" ? "text-gray-800" : "text-white"
                } font-semibold`}
              >
                {t("welcome_notification")}
              </p>
              <p
                className={`${
                  theme === "light" ? "text-gray-600" : "text-light-gray"
                }  text-sm mt-1`}
              >
                {t("welcome_notify_subtext")}
              </p>
              <Link
                to={"/receipts"}
                className="mt-3 text-blue-deep text-sm font-medium hover:underline"
              >
                {t("welcome_notify_link")}
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-dark-gray"
          }  border border-gray-200 rounded-lg p-4 shadow-sm`}
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl">📄</span>
            <div className="flex-1">
              <p
                className={`${
                  theme === "light" ? "text-gray-800" : "text-white"
                }  font-semibold`}
              >
                {t("receipt_uploaded_notification")}
              </p>
              <p
                className={`${
                  theme === "light" ? "text-gray-600" : "text-light-gray"
                }  text-sm mt-1`}
              >
                {t("receipt_uploaded_notify_subtext")}
              </p>
              <Link
                to={"/receipts"}
                className="mt-3 text-purple-mid text-sm font-medium hover:underline"
              >
                {t("receipt_uploaded_notify_link")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NotificationsMenu;

{
  /* <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📄</span>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">
                You've just uploaded a new receipt!
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Processing will take a few moments
              </p>
              <Link
                to={"/receipts"}
                className="mt-3 text-purple-mid text-sm font-medium hover:underline"
              >
                View Receipt →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🔒</span>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">
                You changed your password!
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Your account security has been updated
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🔒</span>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">
                You changed your password!
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Your account security has been updated
              </p>
            </div>
          </div>
        </div> */
}


