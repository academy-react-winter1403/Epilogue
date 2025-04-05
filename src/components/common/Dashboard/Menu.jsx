// import { Button } from "@heroui/button";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cancel01Icon } from "../Icons/Cancel";
import { Activity01Icon } from "../Icons/ActivityIcon";

import { MenuOption } from "./MenuOption";
import { LogoutButton } from "./LogoutButton";
import { CourseIcon } from "../Icons/CourseIcon";
import { Book02Icon } from "../Icons/BookIcon";
import { Books02Icon } from "../Icons/BookIcon2";
import { LibraryIcon } from "../Icons/LibraryIcon";
import { UserSquareIcon } from "../Icons/UserSquerIcon";
import { MoneySend02Icon } from "../Icons/MoneyIcon";
// import h1 from "../../../assets/img/h1.svg";
// import bahr from "../../../assets/img/bahr.svg";

const DashboardMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex flex-col w-[250px] h-full bg-[#242424] text-white">
        {/* <div className=" items-center gap-1 hidden lg:flex">
          <img src={h1} className="pl-1 w-[42px] h-[40px]" />
          <img src={bahr} className="pt-1 w-[138px] h-[38px]" />
        </div> */}
        <div className="px-[20px] space-y-1 flex flex-col ">
          {[
            ["داشبرد", <Activity01Icon />, "/dashboard/student-panel"],
            ["دوره من", <CourseIcon />, "/dashboard/edit-profile"],
            ["رزرو من", <Book02Icon />, "/dashboard/my-courses"],
            [
              "دوره های موردعلاقه",
              <Books02Icon />,
              "/dashboard/reserved-courses",
            ],
            ["بلاگ های موردعلاقه", <LibraryIcon />, "/dashboard/favorites"],
            ["پروفایل", <UserSquareIcon />, "/dashboard/my-comments"],
            ["پرداخت ها", <MoneySend02Icon />, "/dashboard/change-password"],
          ].map((item, key) => (
            <MenuOption
              key={key}
              title={item[0]}
              icon={item[1]}
              url={item[2]}
            />
          ))}
          <div className="pt-7">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
