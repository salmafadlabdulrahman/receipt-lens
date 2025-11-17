import React from 'react';
import { useTranslation } from 'react-i18next';
import { Smartphone, Zap, Shield } from 'lucide-react';
import FeatureCard from '../common/FeatureCard.jsx';

const FeaturesSidebar = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Smartphone, title: t("feature_phone"), description: t("feature_receipt") },
    { icon: Zap, title: t("feature_ai"), description: t("feature_ai_desc") },
    { icon: Shield, title: t("feature_secure"), description: t("feature_secure_desc") },
  ];

  return (
    <div className="max-w-md w-full">
      <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
        <img
          src="https://plus.unsplash.com/premium_photo-1681487816433-b3b2c57443d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlY2VpcHR8ZW58MHx8MHx8fDA%3D"
          alt={t("feature_image_alt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSidebar;
