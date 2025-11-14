import React from 'react';
import { useTranslation } from 'react-i18next';
import { CornerDownRight } from 'lucide-react';

const HeaderLogo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-xl mb-4">
        <CornerDownRight size={30} className="text-white transform rotate-45" />
      </div>
      <h1 className="text-2xl font-extrabold text-gray-800">{t('app_name')}</h1>
      <p className="text-sm text-gray-500 mt-1">{t('app_tagline')}</p>
    </div>
  );
};

export default HeaderLogo;
