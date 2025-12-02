import { Button } from "@/components/ui/button";
import { Receipt, User } from "lucide-react";
import LanguageThemeToggle from "./common/LanguageThemeToggle";

const Navbar = () => {
  const menuItems = ["Dashboard", "Receipts", "Analytics", "Subscription", "Profile"];

  return (
    <nav className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Receipt className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">Spend Right</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className={`text-sm font-medium ${
                    item === "Dashboard"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageThemeToggle />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              + Upload Receipt
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
