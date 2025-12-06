import { useAppContext } from "@/contexts/useAppContext";
import { cn } from "@/lib/utils";

const iconBgColors = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  purple: "bg-purple-50 text-purple-600",
  amber: "bg-amber-50 text-amber-600",
};

export function MetricCard({
  title,
  value,
  subtitle,
  change,
  changeType = "neutral",
  icon: Icon,
  iconBg,
}) {
  const { theme } = useAppContext();
  return (
    // <div
    //   className={`${
    //     theme === "dark" ? "bg-dark-gray border border-slate-500" : "bg-white"
    //   }  rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300`}
    // >
    //   <div className="flex items-start justify-between">
    //     <div className="flex-1">
    //       <p
    //         className={`${
    //           theme === "light" ? "text-slate-500" : "text-white"
    //         } text-sm font-medium`}
    //       >
    //         {title}
    //       </p>
    //       <p
    //         className={`${
    //           theme === "light" ? "text-slate-900" : "text-white"
    //         } text-3xl font-bold  mt-2`}
    //       >
    //         {value}
    //       </p>
    //       {subtitle && (
    //         <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
    //       )}
    //       {change && (
    //         <p
    //           className={cn(
    //             "text-sm font-medium mt-2",
    //             changeType === "positive" && "text-emerald-600",
    //             changeType === "negative" && "text-red-600",
    //             changeType === "neutral" && "text-slate-500"
    //           )}
    //         >
    //           {change}
    //         </p>
    //       )}
    //     </div>
    //     <div
    //       className={cn(
    //         "w-12 h-12 rounded-lg flex items-center justify-center shrink-0",
    //         iconBgColors[iconBg]
    //       )}
    //     >
    //       <Icon className="w-6 h-6 shrink-0" />
    //     </div>
    //   </div>
    // </div>
    <div
      className={`${
        theme === "dark" ? "bg-dark-gray border border-slate-500" : "bg-white"
      } rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p
            className={`${
              theme === "light" ? "text-slate-500" : "text-white"
            } text-sm font-medium`}
          >
            {title}
          </p>
          <p
            className={`${
              theme === "light" ? "text-slate-900" : "text-white"
            } text-2xl sm:text-3xl font-bold mt-2 break-words`}
          >
            {value}
          </p>
          {subtitle && (
            <p className="text-sm text-slate-500 mt-1 break-words">
              {subtitle}
            </p>
          )}
          {change && (
            <p
              className={cn(
                "text-sm font-medium mt-2",
                changeType === "positive" && "text-emerald-600",
                changeType === "negative" && "text-red-600",
                changeType === "neutral" && "text-slate-500"
              )}
            >
              {change}
            </p>
          )}
        </div>
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
            iconBgColors[iconBg]
          )}
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
