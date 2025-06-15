import React from 'react';
import { SettingMenuOption } from './SettingMenuOption'; 
import { useTranslation } from 'react-i18next'; 

const SettingMenu = () => {
  const { t } = useTranslation('dashboard'); 

  return (
    <div className="py-8 flex flex-col text-[18px] font-yekan-600 text-[#707070]">
      <p className="text-black text-2xl">
        {t('settings')} 
      </p>
      <div className="space-y-1 flex flex-col w-[210px] h-[798px] border-l border-[#DCDCDC]">
        {[
          [t('twoStepPassword'), "/StudentPanel/Setting/Two-Step-Password"],
          [t('changePassword'), "/StudentPanel/Setting/change-password"] 
        ].map((item, key) => (
          <SettingMenuOption
            key={key}
            title={item[0]}
            url={item[1]}
          />
        ))}

      </div>
    </div>
  );
};

export default SettingMenu;