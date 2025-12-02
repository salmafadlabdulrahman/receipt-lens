import { createContext } from "react";

type AppContextType = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
