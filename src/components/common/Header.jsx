import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import h1 from "../../assets/img/h1.svg";
import bahr from "../../assets/img/bahr.svg";
import Menu from "./Menu";

import useUserStore from "../../core/constant/user-info";
import { getUserInfo } from "../../core/services/api/Dashboard/dashborad";
import { useQuery } from "@tanstack/react-query";
import ThemeToggle from "./AnimatedThemeSwitcher";
import { ColorPickerIcon } from "./Icons/ThemeIcon";
import ColorThemeModal from "./ThemeModal/ThemeModal";

const Header = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo
})
const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const setTheme = useStore((state) => state.setTheme);
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      gsap.to(dropdownRef.current, {
        y: "-20px",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => setDropdownOpen(false),
      });
    } else {
      setDropdownOpen(true);
    }
  };

  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { y: "-20px", opacity: 0 },
        { y: "0px", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isDropdownOpen]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    console.log(`Theme changed to: ${newTheme}`);
    console.log(
      "Background Color:",
      getComputedStyle(document.documentElement).getPropertyValue("--bg-color")
    );
    console.log(
      "Text Color:",
      getComputedStyle(document.documentElement).getPropertyValue("--text-color")
    );
  };

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
        <div className="m-auto mx-[175px] items-center justify-center hidden lg:flex lg:gap-x-8 bg-[#2F2F2F] rounded-[56px] pl-1 pr-[24px] py-[5px]">
          <NavLink to="/" className="relative py-2 text-[16px] text-white">
            خانه
          </NavLink>
          <NavLink to="/CourseList" className="relative py-2 text-white">
            دوره ها
          </NavLink>
          <NavLink to="/BlogeList" className="relative py-2 text-white">
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
      </div>

      <div className="gap-[8px] hidden lg:flex relative">
        <button
          className="rounded-full w-[48px] h-[48px] bg-[#FCFCFC] border border-[#DCDCDC] text-black"
          onClick={toggleDropdown}
        >
          <div className="flex items-center justify-center">
            <PaintBoardIcon />
          </div>
        </button>

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-[60px] left-0 bg-white shadow-lg rounded-lg p-4"
          >
            <ul>
              <li
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => changeTheme("red")}
              >
                قرمز
              </li>
              <li
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => changeTheme("blue")}
              >
                آبی
              </li>
              <li
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => changeTheme("green")}
              >
                سبز
              </li>
            </ul>
          </div>
        )}
       
        <div className=" gap-[8px] hidden lg:flex">

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
        <Menu />
      </div>
    </div>
  );
};

export default Header;