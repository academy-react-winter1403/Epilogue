import React, { useState } from "react";
import { Menu02Icon } from "../Icons/MenuIcon";
import { AnimatePresence, motion } from "framer-motion";
import { Cancel01Icon } from "../Icons/Cancel";
import { Activity01Icon } from "../Icons/ActivityIcon";
import { CourseIcon } from "../Icons/CourseIcon";
import { Book02Icon } from "../Icons/BookIcon";
import { Books02Icon } from "../Icons/BookIcon2";
import { LibraryIcon } from "../Icons/LibraryIcon";
import { UserSquareIcon } from "../Icons/UserSquerIcon";
import { MoneySend02Icon } from "../Icons/MoneyIcon";
import { MenuOption } from "./MenuOption";
import { LogoutButton } from "./LogoutButton";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ResponsiveMenu = () => {
  const { t } = useTranslation('dashboard'); // Use the 'dashboard' namespace

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="lg:hidden max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" />
        <div className="flex items-center justify-between gap-[8px]">
          <button
            onClick={toggleMenu}
            className="rounded-full w-[48px] h-[48px] bg-[#2F2F2F]"
          >
            <div className="flex items-center justify-center">
              <Menu02Icon />
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{ x: 200 }}
              transition={{ duration: 0.35 }}
              className="md:hidden flex flex-col fixed right-0 max-w-[313px] bottom-0 top-0 bg-[#2F2F2F] z-20 text-white"
            >
              <div className="flex flex-row gap-[107px] p-1">
                <div className="p-4 ">
                  <Cancel01Icon />
                  <div
                    className="absolute top-0 bottom-0 w-full z-10 "
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex flex-col w-[250px] h-full bg-[#242424] text-white">
                  <div className="space-y-1 flex flex-col ">
                    {[
                      [t('dashboard'), <Activity01Icon />, "/StudentPanel/dashboard"],
                      [t('myCourses'), <CourseIcon />, "/StudentPanel/my-courses"],
                      [t('myReservations'), <Book02Icon />, "/StudentPanel/my-reserve"],
                      [t('favoriteCourses'), <Books02Icon />, "/StudentPanel/course-fav"],
                      [t('favoriteBlogs'), <LibraryIcon />, "/StudentPanel/blog-fav"],
                      [t('profile'), <UserSquareIcon />, "/StudentPanel/edite-profile/profile-info"],
                      [t('payments'), <MoneySend02Icon />, "/dashboard/change-password"], // Corrected path to payments
                    ].map((item, key) => (
                      <MenuOption
                        key={key}
                        title={item[0]}
                        icon={item[1]}
                        url={item[2]}
                      />
                    ))}
                    <div className="pt-7 pl-[20px]">
                      <LogoutButton />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveMenu;    