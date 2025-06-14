import React, { useState } from "react";
import { Activity01Icon } from "../Icons/ActivityIcon"; // Assuming correct path to icons
import { MenuOption } from "./MenuOption"; // Assuming correct path to MenuOption
import { LogoutButton } from "./LogoutButton"; // Assuming correct path to LogoutButton
import { CourseIcon } from "../Icons/CourseIcon";
import { Book02Icon } from "../Icons/BookIcon";
import { Books02Icon } from "../Icons/BookIcon2";
import { LibraryIcon } from "../Icons/LibraryIcon";
import { UserSquareIcon } from "../Icons/UserSquerIcon";
import { MoneySend02Icon } from "../Icons/MoneyIcon"; // This icon seems unused, consider removing if not needed.
import { AccountSetting02Icon } from "../Icons/SettingIcon";

import { useTranslation } from 'react-i18next'; // Import useTranslation


const DashboardMenu = () => {
  const { t } = useTranslation('dashboard'); // Use the 'dashboard' namespace

  const [isOpen, setIsOpen] = useState(false); // This state seems unused, consider removing if not needed.

  const toggleMenu = () => { // This function seems unused, consider removing if not needed.
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex flex-col w-[250px] h-full bg-[#242424] text-white">
        <div className="space-y-1 flex flex-col">
          {[

            [t('dashboard'), <Activity01Icon />, "/StudentPanel/dashboard", 'dashboard'],
            [t('myCourses'), <CourseIcon />, "/StudentPanel/my-courses", "mycourse"],
            [t('myReservations'), <Book02Icon />, "/StudentPanel/my-reserve", "reserve"],
            [t('favoriteCourses'), <Books02Icon />, "/StudentPanel/course-fav", "myfavcourse"],
            [t('favoriteBlogs'), <LibraryIcon />, "/StudentPanel/blog-fav", "myfavblog"],

            [
              t('profile'),
              <UserSquareIcon />,
              "/StudentPanel/edite-profile/profile-info", "editprofile"
            ],
            [t('settings'), <AccountSetting02Icon />, "/StudentPanel/Setting/Two-Step-Password", "settings"], // Added 'settings' as id
          ].map((item, key) => (
            <MenuOption
              key={key}
              title={item[0]}
              icon={item[1]}
              url={item[2]}
              id={item[3]}
            />
          ))}
          <div className="pt-7 pl-[20px]">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;