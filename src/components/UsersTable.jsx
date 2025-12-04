import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const users = [
  { id: 1, name: "Sarah Johnson", email: "sarah.johnson@email.com", role: "Admin", roleColor: "bg-primary/10 text-primary", registeredDate: "Dec 15, 2024", status: "Active", statusColor: "bg-success/10 text-success", initials: "SJ", avatarBg: "bg-primary/20" },
  { id: 2, name: "Michael Chen", email: "michael.chen@email.com", role: "User", roleColor: "bg-info/10 text-info", registeredDate: "Dec 14, 2024", status: "Active", statusColor: "bg-success/10 text-success", initials: "MC", avatarBg: "bg-chart-2/20" },
  { id: 3, name: "Emily Davis", email: "emily.davis@email.com", role: "Moderator", roleColor: "bg-warning/10 text-warning", registeredDate: "Dec 13, 2024", status: "Pending", statusColor: "bg-warning/10 text-warning", initials: "ED", avatarBg: "bg-chart-5/20" },
  { id: 4, name: "James Wilson", email: "james.wilson@email.com", role: "User", roleColor: "bg-info/10 text-info", registeredDate: "Dec 12, 2024", status: "Active", statusColor: "bg-success/10 text-success", initials: "JW", avatarBg: "bg-chart-3/20" },
  { id: 5, name: "Lisa Anderson", email: "lisa.anderson@email.com", role: "User", roleColor: "bg-info/10 text-info", registeredDate: "Dec 11, 2024", status: "Inactive", statusColor: "bg-muted text-muted-foreground", initials: "LA", avatarBg: "bg-muted" },
];

export default function UsersTable() {
  return (
    <div className="bg-card rounded-2xl card-shadow border border-border/50 animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <div className="flex items-center justify-between p-6 pb-4">
        <h3 className="text-lg font-semibold text-foreground">Recent Users</h3>
        <button className="text-sm text-primary font-medium hover:underline underline-offset-4">View All Users</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-t border-border">
              {["Name", "Email", "Role", "Registered Date", "Status", "Actions"].map((title) => (
                <th key={title} className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">{title}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className={`${user.avatarBg} text-foreground font-medium text-sm`}>{user.initials}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-foreground">{user.name}</span>
                </td>

                <td className="px-6 py-4 text-muted-foreground">{user.email}</td>

                <td className="px-6 py-4">
                  <Badge variant="secondary" className={`${user.roleColor} font-medium rounded-lg px-2.5`}>{user.role}</Badge>
                </td>

                <td className="px-6 py-4 text-muted-foreground">{user.registeredDate}</td>

                <td className="px-6 py-4">
                  <Badge variant="secondary" className={`${user.statusColor} font-medium rounded-lg px-2.5`}>{user.status}</Badge>
                </td>

                <td className="px-6 py-4 flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground"><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground"><Edit className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
