import { Users, Tag, Receipt, DollarSign } from "lucide-react";
import StatCard from "@/components/StatCard";

const AdminCards = () => {
  const adminStats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "12% vs last month",
      isPositive: true,
      icon: Users,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Top Category",
      value: "Shopping",
      change: "$892.45 spent",
      isPositive: true,
      icon: Tag,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Receipts Uploaded",
      value: "8,942",
      change: "$892.45 avg value",
      isPositive: true,
      icon: Receipt,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "System Spend Total",
      value: "$124,847",
      change: "5% vs last month",
      isPositive: false,
      icon: DollarSign,
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <section
      aria-label="Admin statistics"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
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
