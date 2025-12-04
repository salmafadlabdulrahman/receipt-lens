import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";

const receipts = [
  {
    merchant: "Starbucks Coffee",
    date: "Dec 15, 2024",
    category: "Dining",
    amount: "$12.45",
    status: "Processed",
    icon: "S",
    iconBg: "bg-red-100",
    categoryColor: "bg-orange-100 text-orange-700",
  },
  {
    merchant: "Shell Gas Station",
    date: "Dec 14, 2024",
    category: "Transportation",
    amount: "$45.20",
    status: "Processed",
    icon: "S",
    iconBg: "bg-blue-100",
    categoryColor: "bg-blue-100 text-blue-700",
  },
  {
    merchant: "Amazon Purchase",
    date: "Dec 13, 2024",
    category: "Shopping",
    amount: "$89.99",
    status: "Processing",
    icon: "A",
    iconBg: "bg-green-100",
    categoryColor: "bg-purple-100 text-purple-700",
  },
  {
    merchant: "Office Supplies Co",
    date: "Dec 12, 2024",
    category: "Business",
    amount: "$156.78",
    status: "Processed",
    icon: "O",
    iconBg: "bg-purple-100",
    categoryColor: "bg-indigo-100 text-indigo-700",
  },
];

const RecentReceiptsTable = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Receipts</h3>
        <button className="text-sm text-primary hover:text-primary/80">
          View All Receipts
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Merchant
              </th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Date
              </th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Category
              </th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Amount
              </th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((receipt, index) => (
              <tr key={index} className="border-b border-border/50">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${receipt.iconBg}`}>
                      <span className="font-semibold text-foreground">{receipt.icon}</span>
                    </div>
                    <span className="font-medium text-foreground">{receipt.merchant}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-muted-foreground">{receipt.date}</td>
                <td className="py-4">
                  <Badge variant="secondary" className={`${receipt.categoryColor} border-0`}>
                    {receipt.category}
                  </Badge>
                </td>
                <td className="py-4 font-semibold text-foreground">{receipt.amount}</td>
                <td className="py-4">
                  <Badge
                    variant="secondary"
                    className={`border-0 ${
                      receipt.status === "Processed"
                        ? "bg-success-light text-success"
                        : "bg-warning-light text-warning"
                    }`}
                  >
                    {receipt.status}
                  </Badge>
                </td>
                <td className="py-4">
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="h-5 w-5" />
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
