import { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const savedTheme = localStorage.getItem("theme") || "light";

  document.documentElement.classList.toggle("dark", savedTheme === "dark");

  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
