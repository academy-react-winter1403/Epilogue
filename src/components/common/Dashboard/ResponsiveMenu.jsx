import React, { useState } from "react";
import { Menu02Icon } from "../Icons/MenuIcon";
import { AnimatePresence,motion } from "framer-motion";
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

const ResponsiveMenu = () => {
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
                  <div className=" space-y-1 flex flex-col ">
                    {[
                      [
                        "داشبورد",
                        <Activity01Icon />,
                        "/StudentPanel/dashboard",
                      ],
                      ["دوره من", <CourseIcon />, "/StudentPanel/my-courses"],
                      ["رزرو من", <Book02Icon />, "/StudentPanel/my-reserve"],
                      [
                        "دوره های موردعلاقه",
                        <Books02Icon />,
                        "/StudentPanel/course-fav",
                      ],
                      [
                        "بلاگ های موردعلاقه",
                        <LibraryIcon />,
                        "/StudentPanel/blog-fav",
                      ],
                      [
                        "پروفایل",
                        <UserSquareIcon />,
                        "/StudentPanel/edite-profile/profile-info",
                      ],
                      [
                        "پرداخت ها",
                        <MoneySend02Icon />,
                        "/dashboard/change-password",
                      ],
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
