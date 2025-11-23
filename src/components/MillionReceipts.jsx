import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import DeleteIcon from "@mui/icons-material/Delete";
import ProblemCard from "./ProblemCard";

const cardsContent = [
  {
    title: "Clutter & Disorganization",
    description:
      "Receipts scattered across emails, wallets, and drawers. Physical receipts fade, get lost, or become unreadable when you need them most.",
    icon: <HistoryEduIcon sx={{ fontSize: "2.5em" }} />,
  },
  {
    title: "Missed Reimbursements",
    description:
      "Employees lose thousands annually by failing to claim business expenses. Missed placed receipts mean lost money. and frustrated finance teams.",
    icon: <MonetizationOnIcon sx={{ fontSize: "2.5em" }} />,
  },
  {
    title: "Financial Stress",
    description:
      "Manual tracking makes budgeting impossible. Tax season becomes a scramble to find deductible expense, leading to overpaid taxes.",
    icon: <NewReleasesIcon sx={{ fontSize: "2.5em" }} />,
  },
  {
    title: "Storage Issues",
    description:
      "Physical receipts takes up space and make it difficult to find purchases when you need them - for returns, warranties, or records.",
    icon: <BackupTableIcon sx={{ fontSize: "2.5em" }} />,
  },
  {
    title: "Environmental Waste",
    description:
      "Billions of paper receipts contribute to deforestation and waste. Most receipts contain harmful chemicals that are not eco-friendly and can't be recycled.",
    icon: <DeleteIcon sx={{ fontSize: "2.5em" }} />,
  },
];

const MillionReceipts = () => {
  return (
    <section className="text-center mt-[6em] w-[90%] m-auto">
      <section>
        <p className="text-purple-mid text-[1.5em] font-medium">The problem</p>
        <h3 className="mt-[.5em] font-semibold text-[2.2em] leading-[1.2em] tracking-tight">
          Receipts are a nightmare for millions
        </h3>
        <p className="mt-[.7em] text-medium-gray font-medium">
          From last paper receipts to missed reimbursements, managing expenses
          shouldn't be this hard.
        </p>
      </section>

      <section className="mt-[3em]">
        {cardsContent.map((card, index) => (
          <div className="max-w-[700px] text-left m-auto">
            <ProblemCard {...card} key={index} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default MillionReceipts;
