import { useAppContext } from "../contexts/useAppContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import LanguageSwitcher from "../components/common/LanguageSwitcher";

const LanguageThemeToggle = ({ horizontal = false }) => {
  const { theme, setTheme } = useAppContext();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`flex ${
        horizontal ? "flex-col" : "flex-row"
      } items-center gap-2 `}
    >
      <LanguageSwitcher />

      <button
        onClick={handleThemeToggle}
        style={{
          background: "var(--login-right-gradient)",
          color: "var(--text-main)",
        }}
        className="p-2 rounded-full  text-gray-800 dark:text-gray-200 flex items-center justify-center hover:scale-110 transition-transform duration-200"
      >
        {theme === "light" ? (
          <SunIcon className="w-5 h-5" />
        ) : (
          <MoonIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default LanguageThemeToggle;
