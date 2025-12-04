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
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          {t("recentReceipts")}
        </h3>
        <button className="text-sm text-primary hover:text-primary/80">
          {t("viewAllReceipts")}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table
          className={`w-full table-fixed border-collapse text-sm ${
            theme === "light"
              ? "bg-white text-black"
              : "bg-dark-gray text-white"
          } ${isRTL ? "direction-rtl text-right" : "text-left"}`}
        >
          <thead>
            <tr className="border-b border-border">
              {[
                t("merchant"),
                t("date"),
                t("category"),
                t("amount"),
                t("status"),
                t("actions"),
              ].map((header, idx) => (
                <th
                  key={idx}
                  className="py-3 px-2 text-center font-medium text-muted-foreground uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {receipts.map((receipt, index) => (
              <tr key={index} className="border-b border-border/50 text-center">
                {/* Merchant */}
                <td className="py-4 px-2">
                  <div className="flex items-center justify-center gap-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${receipt.iconBg} text-black`}
                    >
                      <span className="font-semibold text-black">
                        {receipt.icon}
                      </span>
                    </div>
                    <span className="font-medium">{receipt.merchant}</span>
                  </div>
                </td>

                {/* Date */}
                <td className="py-4 px-2">{receipt.date}</td>

                {/* Category */}
                <td className="py-4 px-2">
                  <Badge
                    variant="secondary"
                    className={`${receipt.categoryColor} border-0`}
                  >
                    {receipt.category}
                  </Badge>
                </td>

                {/* Amount */}
                <td className="py-4 px-2 font-semibold">{receipt.amount}</td>

                {/* Status */}
                <td className="py-4 px-2">
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

                {/* Actions */}
                <td className="py-4 px-2">
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
