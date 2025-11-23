import LanguageThemeToggle from "./LanguageThemeToggle";

const FloatingToggleBox = () => {
  return (
    <div
      style={{ backgroundColor: "var(--bg-main)" }}
      className="fixed top-1/2 right-0 transform -translate-y-1/2 
                 p-2 rounded-l-lg shadow-lg z-50 flex items-center gap-2"
    >
      <LanguageThemeToggle horizontal={true} />
    </div>
  );
};

export default FloatingToggleBox;
