// import { Button } from "@heroui/button";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cancel01Icon } from "../Icons/Cancel";
import { Activity01Icon } from "../Icons/ActivityIcon";
import { MenuOption } from "./MenuOption";
import { LogoutButton } from "./LogoutButton";

const DashboardMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex flex-col  w-[250px] h-full bg-[#242424] text-white">
        <div className="px-[24px] space-y-1 flex flex-col ">
          {[
            ["داشبرد", <Activity01Icon />, "/dashboard/user-overview"],
            ["دوره من", <Activity01Icon />, "/dashboard/edit-profile"],
            ["رزرو من", <Activity01Icon />, "/dashboard/my-courses"],
            [
              "دوره های موردعلاقه",
              <Activity01Icon />,
              "/dashboard/reserved-courses",
            ],
            ["بلاگ های موردعلاقه", <Activity01Icon />, "/dashboard/favorites"],
            ["پروفایل", <Activity01Icon />, "/dashboard/my-comments"],
            ["پرداخت ها", <Activity01Icon />, "/dashboard/change-password"],
          ].map((item, key) => (
            <MenuOption
              key={key}
              title={item[0]}
              icon={item[1]}
              url={item[2]}
            />
          ))}
          <div className="pt-11">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
