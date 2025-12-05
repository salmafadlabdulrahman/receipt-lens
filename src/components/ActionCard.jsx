import { Card } from "./ui/card";
import { Button } from "./ui/Button";

const ActionCard = ({
  title,
  description,
  buttonText,
  icon,
  bgColor,
}) => {
  const Icon = icon;
  const buttonProps = {
    variant: "outline",
    className: "bg-white/20 text-white hover:bg-white/30 border-0",
  };

  return (
    <Card className={`${bgColor} border-0 p-6 text-white`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-white/90 mb-4">{description}</p>

          <Button {...buttonProps}>{buttonText}</Button>
        </div>

        <Icon className="h-8 w-8 text-white/70" />
      </div>
    </Card>
  );
};

export default ActionCard;
