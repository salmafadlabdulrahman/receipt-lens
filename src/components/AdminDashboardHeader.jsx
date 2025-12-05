import { useTranslation } from "react-i18next";
import { useAppContext } from "@/contexts/useAppContext";

const AdminDashboardHeader = () => {
  const { t } = useTranslation();
  const { theme } = useAppContext();

  return (
    <div className="mb-8">
      <h1
        className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
          theme === "light" ? "text-slate-900" : "text-white"
        }`}
      >
        {t("adminDashboardTitle")}
      </h1>

      <p
        className={`text-sm sm:text-base md:text-lg mt-2 ${
          theme === "light" ? "text-slate-500" : "text-light-gray"
        }`}
      >
        {t("adminDashboardSubtitle")}
      </p>
    </div>
  );
};

export default AdminDashboardHeader;
