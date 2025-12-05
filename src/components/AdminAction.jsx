import { Card } from "./ui/card";
import { Button } from "./ui/button";

const AdminAction = ({
  title,
  description,
  buttonText,
  icon: Icon,
  bgColor,
  onClick
}) => {
  return (
    <Card className={`${bgColor} border-0 p-8 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start h-full justify-between rounded-[20px]`}>
      <div className="w-full">
        <div className="bg-white/20 w-fit p-3 rounded-xl mb-5 backdrop-blur-sm">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/90 text-sm mb-8 leading-relaxed font-medium">{description}</p>
      </div>

      <Button 
        onClick={onClick}
        variant="secondary" 
        size="sm"
        className="bg-white/20 hover:bg-white/30 text-white border-0 font-semibold px-5 h-10 rounded-xl w-fit shadow-sm transition-all"
      >
        {buttonText}
      </Button>
    </Card>
  );
};

export default AdminAction;
