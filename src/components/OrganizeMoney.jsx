import laptopIcon from "/laptop-img.png";
import bikeIcon from "/bike-img.png";
import planeIcon from "/plane-img.png";
import cameraIcon from "/camera-img.png";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";

const OrganizeMoney = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useAppContext();
  const isArabic = i18n.language === "ar";

  const goals = [
    {
      title: "New Laptop",
      price: 400,
      img: laptopIcon,
      color: "#E8F2EE",
    },
    {
      title: "Dream Bike",
      price: 200,
      img: bikeIcon,
      color: "#F1DFDF",
    },
    {
      title: "Holiday",
      price: 14000,
      img: planeIcon,
      color: "#DFE1F1",
    },
    {
      title: "Camera",
      price: 100,
      img: cameraIcon,
      color: "#DFEBF1",
    },
  ];
  return (
    <section className={`mt-[8em] mb-[10em] px-[2em] md:px-0 md:text-center`}>
      <h3 className={`text-[2.5em] font-semibold ${theme === "light" ? "text-black" : "text-white"}`}>
        {t("organize_money_header")}
      </h3>
      <p
        className={`mt-[1em] font-medium max-w-[500px] md:m-auto md:mt-[1em] ${
          isArabic ? "text-[1.5em]" : ""
        } ${theme === "light" ? "text-black" : "text-white"}`}
      >
        {t("organize_money_subheader")}
      </p>

      <div className="goals-container mt-[3em] flex items-center justify-center gap-[1em] flex-wrap md:max-w-[70%] md:m-auto md:mt-[3em]">
        {goals.map((goal, i) => (
          <div key={i} className={`mb-[1em] ${theme === "light" ? "text-black" : "text-white"}`}>
            <div
              style={{ backgroundColor: goal.color }}
              className="w-[150px] h-[150px] rounded-[10px] flex flex-col items-center justify-center"
            >
              <img
                src={goal.img}
                alt={`an image of a ${goal.title}`}
                className="h-[55px] object-contain"
              />
            </div>
            <p className="mt-[.5em] font-medium">{goal.title}</p>
            <p>${goal.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizeMoney;
