import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  bgColor: string;
}

const ActionCard = ({
  title,
  description,
  buttonText,
  icon: Icon,
  bgColor,
}: ActionCardProps) => {
  return (
    <Card className={`${bgColor} border-0 p-6 text-white dark:text-black`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-white/90 dark:text-black/90 mb-4">
            {description}
          </p>
          <Button
            variant="secondary"
            className="bg-white/20 dark:bg-black/10 text-white dark:text-black hover:bg-white/30 dark:hover:bg-black/20 border-0"
          >
            {buttonText}
          </Button>
        </div>
        <Icon className="h-8 w-8 text-white/70 dark:text-black/70" />
      </div>
    </Card>
  );
};

export default ActionCard;
