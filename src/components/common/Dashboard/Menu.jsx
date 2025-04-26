// import { Button } from "@heroui/button";
import React, { useState } from "react";
import { Activity01Icon } from "../Icons/ActivityIcon";

import { MenuOption } from "./MenuOption";
import { LogoutButton } from "./LogoutButton";
import { CourseIcon } from "../Icons/CourseIcon";
import { Book02Icon } from "../Icons/BookIcon";
import { Books02Icon } from "../Icons/BookIcon2";
import { LibraryIcon } from "../Icons/LibraryIcon";
import { UserSquareIcon } from "../Icons/UserSquerIcon";
import { MoneySend02Icon } from "../Icons/MoneyIcon";
import { AccountSetting02Icon } from "../Icons/SettingIcon";

const DashboardMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex flex-col w-[250px] h-full bg-[#242424] text-white">
        <div className=" space-y-1 flex flex-col ">
          {[
            ["داشبورد", <Activity01Icon />, "/StudentPanel/dashboard",'dashboard'],
            ["دوره من", <CourseIcon />, "/StudentPanel/my-courses","mycourse"],
            ["رزرو من", <Book02Icon />, "/StudentPanel/my-reserve","reserve"],
            ["دوره های موردعلاقه", <Books02Icon />, "/StudentPanel/course-fav","myfavcourse"],
            ["بلاگ های موردعلاقه", <LibraryIcon />, "/StudentPanel/blog-fav","myfavblog"],
            [
              "پروفایل",
              <UserSquareIcon />,
              "/StudentPanel/edite-profile/profile-info","editprofile"
            ],
            ["تنظیمات", <AccountSetting02Icon />, "/StudentPanel/Setting/Two-Step-Password"],
            

            ["پرداخت ها", <MoneySend02Icon />, "/dashboard/change-password","payment"],

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
