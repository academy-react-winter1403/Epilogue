import React from 'react';
import { ProfileMenuOption } from './ProfileMenuOption'; // Assuming correct path to ProfileMenuOption
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ProfileMenu = () => {
  const { t } = useTranslation('dashboard'); // Use the 'dashboard' namespace

  return (
    <div className="py-8 flex flex-col text-[18px] font-yekan-600 text-[#707070]">
      <p className="text-black text-2xl">
        {t('myProfile')} {/* Translated: پروفایل من */}
      </p>
      <div className="space-y-1 flex flex-col w-[210px] h-[798px] border-l border-[#DCDCDC]">
        {[
          [t('accountInformation'), "/StudentPanel/edite-profile/profile-info"],
          [t('photos'), "/StudentPanel/edite-profile/profile-pic"],
          [t('residence'), "/StudentPanel/edite-profile/location"],
          [t('links'), "/StudentPanel/edite-profile/links"],
        ].map((item, key) => (
          <ProfileMenuOption
            key={key}
            title={item[0]}
            url={item[1]}
          />
        ))}

      </div>
    </div>
  );
};

export default ProfileMenu;