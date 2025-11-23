import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import DeleteIcon from "@mui/icons-material/Delete";
import ProblemCard from "./ProblemCard";
import { useAppContext } from "../contexts/useAppContext";
import { useTranslation } from "react-i18next";
import { cardsContent } from "../utils/cardsContent";

// const cardsContent = [
//   {
//     title: "Clutter & Disorganization",
//     description:
//       "Receipts scattered across emails, wallets, and drawers. Physical receipts fade, get lost, or become unreadable when you need them most.",
//     icon: <HistoryEduIcon sx={{ fontSize: "2.5em" }} />,
//   },
//   {
//     title: "Missed Reimbursements",
//     description:
//       "Employees lose thousands annually by failing to claim business expenses. Missed placed receipts mean lost money. and frustrated finance teams.",
//     icon: <MonetizationOnIcon sx={{ fontSize: "2.5em" }} />,
//   },
//   {
//     title: "Financial Stress",
//     description:
//       "Manual tracking makes budgeting impossible. Tax season becomes a scramble to find deductible expense, leading to overpaid taxes.",
//     icon: <NewReleasesIcon sx={{ fontSize: "2.5em" }} />,
//   },
//   {
//     title: "Storage Issues",
//     description:
//       "Physical receipts takes up space and make it difficult to find purchases when you need them - for returns, warranties, or records.",
//     icon: <BackupTableIcon sx={{ fontSize: "2.5em" }} />,
//   },
//   {
//     title: "Environmental Waste",
//     description:
//       "Billions of paper receipts contribute to deforestation and waste. Most receipts contain harmful chemicals that are not eco-friendly and can't be recycled.",
//     icon: <DeleteIcon sx={{ fontSize: "2.5em" }} />,
//   },
// ];

const MillionReceipts = () => {
  const { theme } = useAppContext();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className="text-center mt-[6em] w-[90%] m-auto">
      <section>
        <p
          className={`text-purple-mid text-[1.5em] font-medium ${
            isArabic ? "text-[1.8em]" : ""
          } `}
        >
          {t("problem")}
        </p>
        <h3
          className={`mt-[.5em] font-semibold text-[2.2em] leading-[1.2em] tracking-tight ${
            theme === "dark" ? "text-white" : "text-medium-gray"
          } ${isArabic ? "text-[2.5em]" : ""}`}
        >
          {t("problem_title")}
        </h3>
        <p
          className={`mt-[.7em] font-medium ${
            theme === "dark" ? "text-warm-gray" : "text-medium-gray"
          } ${isArabic ? "text-[1.3em]" : ""}`}
        >
          {t("problem_subtitle")}
        </p>
      </section>

      <section className="mt-[3em]">
        {cardsContent.map((card, index) => (
          <div className="max-w-[700px] text-left m-auto" key={index}>
            <ProblemCard
              title={t(card.title)}
              description={t(card.description)}
              icon={card.icon}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default MillionReceipts;
