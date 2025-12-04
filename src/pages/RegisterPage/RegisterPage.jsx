import React from "react";
import RegisterFormSection from "../../components/register/RegisterFormSection";
import FeaturesSidebar from "../../components/login/FeaturesSidebar.jsx";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      <div
        className="w-full md:w-1/2 flex flex-col items-center justify-start 
                   p-8 md:p-12 lg:p-5 shadow-2xl md:shadow-none relative"
        style={{
          background: "var(--bg-main)",
          color: "var(--text-main)",
        }}
      >

        <RegisterFormSection />
      </div>

      <div
        className="w-full md:w-1/2 flex items-center justify-center 
                   p-8 md:p-12 lg:p-5 shadow-2xl"
        style={{
          background: "var(--login-right-gradient)",
          color: "var(--text-main)",
          fontFamily: "var(--font-primary)",
        }}
      >
        <FeaturesSidebar />
      </div>
    </div>
  );
};

export default RegisterPage;
