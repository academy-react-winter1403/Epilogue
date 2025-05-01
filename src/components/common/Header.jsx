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

const Header = () => {
  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-10 bg-background text-text">
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
                `relative py-2 text-[16px] text-white flex flex-col items-center ${
                  isActive ? "after:block" : "after:hidden"
                } 
    after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-[#3772FF] after:mt-1`
              }
            >
              خانه
            </NavLink>

            <NavLink
              to="/CourseList"
              className={({ isActive }) =>
                `relative py-2 text-white flex flex-col items-center ${
                  isActive ? "after:block" : "after:hidden"
                } 
    after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-[#3772FF] after:mt-1`
              }
            >
              دوره ها
            </NavLink>

            <NavLink
              to="/BlogeList"
              className={({ isActive }) =>
                `relative py-2 text-white flex flex-col items-center ${
                  isActive ? "after:block" : "after:hidden"
                } 
    after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-[#3772FF] after:mt-1`
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
