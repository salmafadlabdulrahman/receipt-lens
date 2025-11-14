import React from "react";
import { useTranslation } from "react-i18next";
import { FiCheckCircle } from "react-icons/fi";
const FeaturesSidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-md w-full">
      <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
        <img
          src="https://plus.unsplash.com/premium_photo-1681487816433-b3b2c57443d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlY2VpcHR8ZW58MHx8MHx8fDA%3D"
          alt={t("feature_image_alt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold mb-8">{t("feature_title")}</h3>
        <p className="text-center mb-6 max-w-sm text-purple-200">
          {t("feature_description")}
        </p>

        <ul className="space-y-3 text-left w-full max-w-xs">
          <li className="flex items-center">
            <FiCheckCircle className="text-purple-400 mr-3" size={20} />
            {t("feature_item_1")}
          </li>
          <li className="flex items-center">
            <FiCheckCircle className="text-purple-400 mr-3" size={20} />
            {t("feature_item_2")}
          </li>
          <li className="flex items-center">
            <FiCheckCircle className="text-purple-400 mr-3" size={20} />
            {t("feature_item_3")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturesSidebar;
