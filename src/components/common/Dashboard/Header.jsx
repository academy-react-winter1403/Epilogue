import React from "react";
import { NavLink } from "react-router-dom";
import h1 from "../../../assets/img/h1.svg";
import bahr from "../../../assets/img/bahr.svg";
import Pappe from "../../../assets/img/Peppe.png";

import { Moon02Icon } from "../Icons/MoonIcon";
import { Notification02Icon } from "../Icons/NotificationIcon";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center max-w-7xl justify-between p-4 px-8">
      <div className=" flex items-center gap-[39px]">
        <div className=" items-center gap-1 hidden lg:flex">
          <img src={h1} className="pl-1 w-[42px] h-[40px]" />
            <img src={bahr} className="pt-1 w-[138px] h-[38px]" />
        </div>

        {/* UserInfo */}
        <div className="flex items-center gap-2">
          <img className="rounded-full  w-[48px] h-[48px] " src={Pappe} />
          <div className=" flex flex-col">
            <p className="font-yekan-700 text-[16px] text-nowrap text-[#FCFCFC]">
              پارسا اقایی
            </p>
            <p className="font-yekan-500 text-[14px] text-nowrap text-[#FCFCFC]">
              دانشجو
            </p>
          </div>
        </div>
      </div>

      {/* NavBar */}
      <div className=" flex flex-1 justify-center">
        <div className="flex gap-6 md:gap-9 lg:gap-16 items-center rounded-[56px] ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative py-2 font-yekan-500 text-[16px] text-white text-nowrap ${
                isActive
                  ? "before:content-['•'] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2"
                  : ""
              }`
            }
          >
            صفحه اصلی
          </NavLink>

          <NavLink
            to="/CourseList"
            className={({ isActive }) =>
              `relative py-2 font-yekan-500 text-[16px] text-white text-nowrap ${
                isActive
                  ? "before:content-['•'] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2"
                  : ""
              }`
            }
          >
            گزارش
          </NavLink>

          <NavLink
            to="/NewsList"
            className={({ isActive }) =>
              `relative py-2 font-yekan-500 text-[16px] text-white text-nowrap ${
                isActive
                  ? "before:content-['•'] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2"
                  : ""
              }`
            }
          >
            ارتباط باما
          </NavLink>
        </div>
      </div>

      <div className=" flex gap-2">
        <button className="rounded-full w-[48px] h-[48px] bg-[#2F2F2F] text-black">
          <div className="flex items-center justify-center">
            <Notification02Icon color={"#ffff"} />
          </div>
        </button>
        <button className="rounded-full p-3 bg-[#2F2F2F]">
          <Moon02Icon />
        </button>
      </div>
    </div>
  );
};

export default Header;
