import { useAppContext } from "../contexts/useAppContext";
import LanguageSwitcher from "../components/common/LanguageSwitcher";

const LanguageThemeToggle = () => {
  const { theme, setTheme } = useAppContext();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-4 ">
      <LanguageSwitcher />
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleThemeToggle}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default LanguageThemeToggle;
