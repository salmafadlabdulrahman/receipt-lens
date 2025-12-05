import { Users, Tag, Receipt, DollarSign } from "lucide-react";
import StatCard from "@/components/StatCard";
import { useTranslation } from "react-i18next";

const AdminCards = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");

  const adminStats = [
    {
      title: t("totalUsers"),
      value: "2,847",
      change: t("totalUsersChange"),
      isPositive: true,
      icon: Users,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: t("topCategory"),
      value: t("shoppingCategory"),
      change: t("topCategoryChange"),
      isPositive: true,
      icon: Tag,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: t("receiptsUploaded"),
      value: "8,942",
      change: t("receiptsUploadedChange"),
      isPositive: true,
      icon: Receipt,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: t("systemSpendTotal"),
      value: "$124,847",
      change: t("systemSpendChange"),
      isPositive: false,
      icon: DollarSign,
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <section
      aria-label="Admin statistics"
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      {adminStats.map((stat, idx) => (
        <StatCard
          key={idx}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          isPositive={stat.isPositive}
          icon={stat.icon}
          bgColor={stat.bgColor}
          iconColor={stat.iconColor}
        />
      ))}
    </section>
  );
};

export default AdminCards;
