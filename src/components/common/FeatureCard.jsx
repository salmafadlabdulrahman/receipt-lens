import React from "react";
/* eslint-disable no-unused-vars */
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start p-4 rounded-xl shadow-xl backdrop-blur-md bg-white/10 hover:bg-white/15 transition duration-300 transform hover:scale-[1.02]">
    <div className="mt-1 mr-4 text-purple-200">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-purple-200 opacity-90">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
