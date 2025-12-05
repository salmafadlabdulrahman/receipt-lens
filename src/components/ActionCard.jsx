import { Card } from "./ui/card";
import { Button } from "./ui/Button";
import { useTranslation } from "react-i18next";

const ActionCard = ({ titleKey, descriptionKey, buttonTextKey, icon, bgColor }) => {
  const { t } = useTranslation();
  const Icon = icon;

  return (
    <Card className={`${bgColor} border-0 p-8 text-white rounded-2xl hover:scale-105 transition-transform duration-300`}>
      <div className="flex flex-col h-full">
        <div className="bg-white/20 w-fit p-3 rounded-xl mb-6 backdrop-blur-sm">
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{t(titleKey)}</h3>
        <p className="text-sm text-white/90 mb-6 flex-1">{t(descriptionKey)}</p>

        <Button 
          variant="secondary"
          className="bg-white/20 hover:bg-white/30 text-white border-0 w-full font-semibold"
        >
          {t(buttonTextKey)}
        </Button>
      </div>
    </Card>
  );
};

export default ActionCard;
