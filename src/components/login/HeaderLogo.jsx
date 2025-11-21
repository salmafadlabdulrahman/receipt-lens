import React from "react";
import { CornerDownRight } from "lucide-react";

const HeaderLogo = () => {

  return (
    <div className="flex flex-col items-center mb-10">
      <h1
        className="text-2xl font-extrabold font-800"
        style={{
          color: "var(--text-main)",
          fontFamily: "var(--font-primary)",
        }}
      >
        Spend Right
      </h1>
      <p
        className="text-sm font-500 mt-1"
        style={{
          color: "var(--text-main)",
          fontFamily: "var(--font-primary)",
        }}
      >
        Scan. Save. Stay Organized{" "}
      </p>
    </div>
  );
};

export default HeaderLogo;
