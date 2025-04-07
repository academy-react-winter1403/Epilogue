// import { Button } from "@heroui/button";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import h1 from "../../assets/img/h1.svg";
import bahr from "../../assets/img/bahr.svg";
import Menu from "./Menu";
import { Moon02Icon } from "./Icons/MoonIcon";
import { Notification02Icon } from "./Icons/NotificationIcon";

const Header = () => {
  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-10">
        <div className="flex flex-row-reverse">
          <span className="pr-2 text-[18px] text-[#22445D] hidden lg:flex">
            <img src={bahr} />
          </span>
          <img src={h1} className="pr-2 sm:h-9" alt="Logo" />
        </div>
        <div className="flex lg:flex-1">
          <div className=" m-auto mx-[175px] items-center justify-center  hidden lg:flex lg:gap-x-8 bg-[#2F2F2F] rounded-[56px] pl-1 pr-[24px] py-[5px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative py-2 text-[16px] text-white ${
                  isActive
                    ? "before:content-['•'] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2"
                    : ""
                }`
              }
            >
              خانه
            </NavLink>

            <NavLink
              to="/CourseList"
              className={({ isActive }) =>
                `relative py-2 text-white ${
                  isActive
                    ? "before:content-['•'] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2"
                    : ""
                }`
              }
            >
              دوره ها
            </NavLink>

            <NavLink
              to="/NewsList"
              className={({ isActive }) =>
                `relative py-2 text-white ${
                  isActive
                    ? "before:content-['•'] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2"
                    : ""
                }`
              }
            >
              بلاگ ها
            </NavLink>

            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                `relative py-2 text-white ${
                  isActive
                    ? "before:content-['•'] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2"
                    : ""
                }`
              }
            >
              درباره ما
            </NavLink>

            <NavLink
              to="/CourseList"
              className="text-sm/6 text-[#FCFCFC] bg-[#3772FF] rounded-[56px] px-5 py-[8px]"
            >
              ثبت نام یا ورود
            </NavLink>
          </div>
        </div>

        <div className=" gap-[8px] hidden lg:flex">
          <button className="rounded-full w-[48px] h-[48px] bg-[#FCFCFC] border border-[#DCDCDC] text-black">
            <div className="flex items-center justify-center">
              <Notification02Icon />
            </div>
          </button>
          <button className="rounded-full p-3 bg-[#2F2F2F]">
              <Moon02Icon />
          </button>
        </div>

        <Menu />
      </div>
    </>
  );
};

export default Header;
