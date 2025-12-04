import { Clock, DollarSign, Bell, Table, Trash2 } from "lucide-react";
import React from "react";

export const cardsContent = [
  {
    title: "cards.clutter_title",
    description: "cards.clutter_desc",
    icon: <Clock className="h-10 w-10" />,
  },
  {
    title: "cards.missed_title",
    description: "cards.missed_desc",
    icon: <DollarSign className="h-10 w-10" />,
  },
  {
    title: "cards.stress_title",
    description: "cards.stress_desc",
    icon: <Bell className="h-10 w-10" />,
  },
  {
    title: "cards.storage_title",
    description: "cards.storage_desc",
    icon: <Table className="h-10 w-10" />,
  },
  {
    title: "cards.environment_title",
    description: "cards.environment_desc",
    icon: <Trash2 className="h-10 w-10" />,
  },
];

export default cardsContent;
