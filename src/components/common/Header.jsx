import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import h1 from "../../assets/img/h1.svg";
import bahr from "../../assets/img/bahr.svg";
import Menu from "./Menu";

import { getUserInfo } from "../../core/services/api/Dashboard/dashborad";
import { useQuery } from "@tanstack/react-query";
import ThemeToggle from "./AnimatedThemeSwitcher";
import { ColorPickerIcon } from "./Icons/ThemeIcon";
import ColorThemeModal from "./ThemeModal/ThemeModal";
import { Link, NavLink } from "react-router-dom";
import useStore from "../../core/Store/Zustand-Store";
import { removeItem } from "../../core/utils/storage.services";
import toast from "react-hot-toast";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const result = await getUserInfo()
      if(!result.currentPictureAddress){
        toast('parsa ')
        removeItem('token')
      }else{
        setIsLoggedIn(true)
      }
      return result
    } ,
  });
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);



  return (
    <div className="flex w-full justify-between">
      <div className=" flex w-full items-center justify-between p-6 lg:px-10 bg-background text-text">
        <div className="flex flex-row-reverse">
          <span className="pr-2 text-[18px] text-[#22445D] hidden lg:flex">
            <img src={bahr} alt="Brand" />
          </span>
          <img src={h1} className="pr-2 sm:h-9" alt="Logo" />
        </div>
        <div className="flex lg:flex-1">
          <div className="m-auto mx-[235px] items-center justify-center hidden lg:flex lg:gap-x-8 bg-[#2F2F2F] rounded-[56px] pl-1 pr-[24px] py-[5px]">
            <NavLink
              to="/"

              className={({ isActive }) =>
                `relative  text-[16px] text-white flex flex-col items-center ${
                  isActive ? "after:block" : "after:hidden"
                } 
    after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-[#ffff] `
              }
            >
              خانه
            </NavLink>

            <NavLink
              to="/CourseList"

              className={({ isActive }) =>
                `relative  text-white flex flex-col items-center ${
                  isActive ? "after:block" : "after:hidden"
                } 
    after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-[#FFFF]`
              }
            >
              دوره ها
            </NavLink>

            <NavLink
              to="/BlogeList"

              className={({ isActive }) =>
                `relative  text-white flex flex-col items-center ${
                  isActive ? "after:block" : "after:hidden"
                } 
    after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-[#FFFF] `
              }
            >
              بلاگ ها
            </NavLink>

            {isLoggedIn ? (
              <Link to={"/StudentPanel/edite-profile/profile-info"}>
                <img
                  className="size-full rounded-full  w-12 border h-12"
                  src={userInfo?.currentPictureAddress}
                ></img>
              </Link>
            ) : (
              <Link
                to="/auth/RegisterPage"

                className="text-sm/6 text-[#FCFCFC] bg-[#3772FF] rounded-[56px] px-5 py-[8px]"
              >
                ثبت نام یا ورود
              </Link>
            )}
          </div>
        </div>
        <div className="gap-[8px] hidden lg:flex relative">
          <button
            className="rounded-full w-[48px] h-[48px] border border-[#DCDCDC] text-black"
            onClick={() => setIsColorModalOpen((prev) => !prev)}
          >
            <div className="flex items-center justify-center">
              <ColorPickerIcon color={"#000"} />
            </div>
          </button>
          <ColorThemeModal
            isOpen={isColorModalOpen}
            onClose={() => setIsColorModalOpen(false)}
            onSelect={(color) => {
              setThemeColor(color);
              setIsColorModalOpen(false);
            }}
          />
          <button className="rounded-full p-3 bg-[#2F2F2F]">
            <ThemeToggle />
          </button>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default Header;
