import { useTranslation } from "react-i18next";

const AdminDashboardHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
        {t("adminDashboardTitle")}
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-slate-500 mt-2">
        {t("adminDashboardSubtitle")}
      </p>
    </div>
  );
};

export default AdminDashboardHeader;
