import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import h1 from "../../../assets/img/h1.svg";
import bahr from "../../../assets/img/bahr.svg";

import ResponsiveMenu from "./ResponsiveMenu";
import { getUserInfo } from "../../../core/services/api/Dashboard/dashborad";
import { useQuery } from "@tanstack/react-query";
import ThemeToggle from "../AnimatedThemeSwitcher";
import { ColorPickerIcon } from "../Icons/ThemeIcon";
import { Home04Icon } from "../Icons/HomeIcon";
import http from '../../../core/services/interceptor/index'
const Header = () => {
  const { data: userInfo } = useQuery({
    queryKey: ["userInfo2"],
    queryFn: () => http.get("/SharePanel/GetProfileInfo"),
    
  });
  console.log(userInfo);

  return (
    <div className="flex flex-wrap items-center max-w-7xl justify-between p-2 px-5 ">
      <div className=" flex items-center gap-[39px] ">
        <div className="flex items-center gap-[50px]">
          <div className=" items-center gap-1 hidden lg:flex">
            <img src={h1} className="pl-1 w-[42px] h-[40px]" />
            <img src={bahr} className="pt-1 w-[138px] h-[38px]" />
          </div>

          <div className="flex flex-row gap-2">
            <img
              className="rounded-full w-[48px] h-[48px] "
              src={userInfo?.currentPictureAddress}
            />
            <div className=" flex flex-col">
              <p className="font-yekan-700 text-[16px] text-nowrap text-[#FCFCFC]">
                {userInfo?.fName} {userInfo?.lName}
              </p>
              <p className="font-yekan-500 text-[14px] text-nowrap text-[#FCFCFC]">
                دانشجو
              </p>
            </div>
          </div>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative py-2 font-yekan-500 text-[16px] text-white text-nowrap ${
              isActive
                ? "before:content-['•'] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2"
                : ""
            }`
          }
        ></NavLink>
      </div>

      <div className=" absolute  left-0 top-4 flex gap-2 lg:pl-6 hidden lg:flex">
        <button className="rounded-full w-[48px] h-[48px] bg-[#2F2F2F] text-black ">
          <div className="flex items-center justify-center">
            <ColorPickerIcon color={"#ffff"} />
          </div>
        </button>
        <button className="rounded-full cursor-pointer p-3 bg-[#2F2F2F]">
          <ThemeToggle />
        </button>
        <Link to={"/"}>
          <button className="rounded-full cursor-pointer p-3 bg-[#2F2F2F]">
            <Home04Icon />
          </button>
        </Link>
      </div>
      <ResponsiveMenu />
    </div>
  );
};

export default Header;
