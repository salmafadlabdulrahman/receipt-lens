const ProblemCard = ({ title, description, icon }) => {
  return (
    <div
      className="flex flex-wrap items-center gap-[1em] mb-[1.5em] p-6 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] bg-white dark:bg-gray-900 "
      style={{
        border: "2px solid transparent",
        borderBottom: "8px solid transparent",
        backgroundImage:
          "linear-gradient(white, white), linear-gradient(to right, #8960ff, #a09afd, #eaafff)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <div>{icon}</div>
      <div className="max-w-[400px]">
        <p className="font-semibold">{title}</p>
        <p className="mt-[.5em] text-[.9em]">{description}</p>
      </div>
    </div>
  );
};

export default ProblemCard;
