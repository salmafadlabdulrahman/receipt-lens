import React from "react";
import RegisterFormSection from "../../components/register/RegisterFormSection";
import FeaturesSection from "../../components/register/FeaturesSection";
import LanguageSwitcher from "../../components/common/LanguageSwitcher.jsx";

const RegisterPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row font-sans"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div
        className="w-full md:w-1/2 flex flex-col items-center justify-start 
                  p-8 md:p-12 lg:p-5  shadow-2xl md:shadow-none relative"
        style={{ backgroundColor: "var(--bg-main)" }}
      >
        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher />
        </div>
        <RegisterFormSection />
      </div>

      <div
        className="w-full md:w-1/2 flex items-center justify-center 
                  p-8 md:p-12 lg:p-5 text-white 
                  shadow-2xl"
        style={{
          background: "var(--login-right-gradient)",
          fontFamily: "var(--font-primary)",
        }}
      >
        <FeaturesSection />
      </div>
    </div>
  );
};

export default RegisterPage;
