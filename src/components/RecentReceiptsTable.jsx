import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import { useAppContext } from "../contexts/useAppContext";
import { useTranslation } from "react-i18next";

const RecentReceiptsTable = () => {
  const { theme } = useAppContext();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language.startsWith("ar");

  const receipts = [
    {
      merchant: "Starbucks Coffee",
      date: "Dec 15, 2024",
      category: t("dining"),
      amount: "$12.45",
      status: t("processed"),
      icon: "S",
      iconBg: "bg-red-100",
      categoryColor: "bg-orange-100 text-orange-700",
    },
    {
      merchant: "Shell Gas Station",
      date: "Dec 14, 2024",
      category: t("transportation"),
      amount: "$45.20",
      status: t("processed"),
      icon: "S",
      iconBg: "bg-blue-100",
      categoryColor: "bg-blue-100 text-blue-700",
    },
    {
      merchant: "Amazon Purchase",
      date: "Dec 13, 2024",
      category: t("shopping"),
      amount: "$89.99",
      status: t("processing"),
      icon: "A",
      iconBg: "bg-green-100",
      categoryColor: "bg-purple-100 text-purple-700",
    },
    {
      merchant: "Office Supplies Co",
      date: "Dec 12, 2024",
      category: t("business"),
      amount: "$156.78",
      status: t("processed"),
      icon: "O",
      iconBg: "bg-purple-100",
      categoryColor: "bg-indigo-100 text-indigo-700",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          {t("recentReceipts")}
        </h3>
        <button className="text-sm text-primary hover:text-primary/80">
          {t("viewAllReceipts")}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table
          className={`w-full border-collapse text-sm ${
            theme === "light"
              ? "bg-white text-black"
              : "bg-dark-gray text-white"
          } ${isRTL ? "direction-rtl text-right" : "text-left"}`}
        >
          <thead>
            {" "}
            <tr className="border-b border-border">
            {" "}
              {[
                { label: t("merchant"), className: "" },
                { label: t("date"), className: "hidden sm:table-cell" },
                { label: t("category"), className: "" },
                { label: t("amount"), className: "" },
                { label: t("status"), className: "" },
                { label: t("actions"), className: "hidden sm:table-cell" },
              ].map((header, idx) => (
                <th
                  key={idx}
                  className={`py-3 px-2 ${
                    header.className
                  } font-medium text-muted-foreground uppercase tracking-wider 
 ${
                    header.label === t("merchant")
                      ? isRTL
                        ? "text-right"
                        : "text-left"
                      : "text-center"
                  }`}
                >
                 {header.label}{" "}
                </th>
              ))}
             {" "}
            </tr>{" "}
          </thead>

          <tbody>
            {receipts.map((receipt, index) => (
              <tr key={index} className="border-b border-border/50">
                <td className="py-4 px-2">
                  <div
                    className={`flex items-center gap-2 `}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${receipt.iconBg} text-black shrink-0`}
                    >
                      <span className="font-semibold text-black">
                        {receipt.icon}
                      </span>
                    </div>
                    {/* Added text truncation for small screens */}
                    <span className="font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                      {receipt.merchant}
                    </span>
                  </div>
                </td>

                {/* Date - Hidden on mobile */}
                <td className="py-4 px-2 hidden sm:table-cell text-center">
                  {receipt.date}
                </td>

                {/* Category */}
                <td className="py-4 px-2 text-center">
                  <Badge
                    variant="secondary"
                    className={`${receipt.categoryColor} border-0`}
                  >
                    {receipt.category}
                  </Badge>
                </td>

                {/* Amount */}
                <td className="py-4 px-2 font-semibold text-center">
                  {receipt.amount}
                </td>

                {/* Status */}
                <td className="py-4 px-2 text-center">
                  <Badge
                    variant="secondary"
                    className={`border-0 ${
                      receipt.status === t("processed")
                        ? "bg-success-light text-success"
                        : "bg-warning-light text-warning"
                    }`}
                  >
                    {receipt.status}
                  </Badge>
                </td>

                {/* Actions - Hidden on mobile */}
                <td className="py-4 px-2 hidden sm:table-cell text-center">
                  <button className="hover:text-foreground">
                    <MoreHorizontal className="h-5 w-5 mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default RecentReceiptsTable;
