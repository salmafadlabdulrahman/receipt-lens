import React from "react";
import LoginFormSection from "../../components/login/LoginFormSection.jsx";
import FeaturesSidebar from "../../components/login/FeaturesSidebar.jsx";
import LanguageSwitcher from "../../components/common/LanguageSwitcher.jsx";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-gray-100">
      <div
        className="w-full md:w-1/2 flex flex-col items-center justify-start 
                   p-8 md:p-12 lg:p-5 bg-white shadow-2xl md:shadow-none relative"
      >
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>

        <LoginFormSection />
      </div>{" "}
      <div
        className="w-full md:w-1/2 flex items-center justify-center 
                   p-8 md:p-12 lg:p-5 text-white 
                   bg-gradient-to-br from-indigo-800 to-purple-900 shadow-2xl"
      >
        <FeaturesSidebar />
      </div>
    </div>
  );
};

export default LoginPage;
