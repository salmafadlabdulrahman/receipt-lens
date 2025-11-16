import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();
  return <div>{t("home_page")}</div>;
};

export default Home;
