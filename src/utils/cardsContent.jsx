import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import DeleteIcon from "@mui/icons-material/Delete";

export const cardsContent = [
  {
    title: "cards.clutter_title",
    description: "cards.clutter_desc",
    icon: <HistoryEduIcon sx={{ fontSize: "2.5em" }} />,
  },
  {
    title: "cards.missed_title",
    description: "cards.missed_desc",
    icon: <MonetizationOnIcon sx={{ fontSize: "2.5em" }} />,
  },
  {
    title: "cards.stress_title",
    description: "cards.stress_desc",
    icon: <NewReleasesIcon sx={{ fontSize: "2.5em" }} />,
  },
  {
    title: "cards.storage_title",
    description: "cards.storage_desc",
    icon: <BackupTableIcon sx={{ fontSize: "2.5em" }} />,
  },
  {
    title: "cards.environment_title",
    description: "cards.environment_desc",
    icon: <DeleteIcon sx={{ fontSize: "2.5em" }} />,
  },
];
