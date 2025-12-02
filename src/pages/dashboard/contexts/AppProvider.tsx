import React, { useState, useEffect, PropsWithChildren } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
