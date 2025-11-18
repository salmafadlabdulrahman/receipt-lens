import { useEffect, useRef, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LanguageThemeToggle from "./LanguageThemeToggle";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { i18n } = useTranslation();
  const { theme } = useAppContext();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative hidden md:flex items-center" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`p-2 rounded ${theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700"}`}
      >
        <MoreVertIcon
          size={22}
          sx={{ color: theme === "light" ? "black" : "white" }}
        />
      </button>

      {open && (
        <div
          className={`absolute top-15 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 w-40 z-50 ${
            isArabic ? "left-0" : "right-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            <LanguageThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
