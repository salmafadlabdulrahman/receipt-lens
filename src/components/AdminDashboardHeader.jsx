import { useAppContext } from "@/contexts/useAppContext";

const AdminDashboardHeader = () => {
  const { theme } = useAppContext();
  return (
    <div className="mb-8">
      <h1
        className={`text-3xl font-bold ${
          theme === "light" ? "text-slate-900" : " text-white"
        }`}
      >
        Admin Dashboard
      </h1>
      <p
        className={`mt-2 ${
          theme === "light" ? "text-slate-500" : " text-light-gray"
        }`}
      >
        Monitor platform performance and user activity
      </p>
    </div>
  );
};

export default AdminDashboardHeader;
