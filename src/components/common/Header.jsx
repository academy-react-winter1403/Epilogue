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

import { useTranslation } from 'react-i18next';
import { AIChatModal, AIChatIcon } from './AIChatModal';
import MultiAccountDropdown from './MultiAccountDropdown'; 

const LanguageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages">
    <path d="m5 8 6 6" />
    <path d="m4 14 6-6 2-3" />
    <path d="M2 5h12" />
    <path d="M7 2h1" />
    <path d="m22 22-5-10-5 10" />
    <path d="M14 18h6" />
  </svg>
);

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
  const [isAIChatModalOpen, setIsAIChatModalOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef(null);


  const { t, i18n } = useTranslation('common');



  useEffect(() => {
    const handleClickOutsideLanguage = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideLanguage);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideLanguage);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = (lng === 'fa') ? 'rtl' : 'ltr';
    setLanguageDropdownOpen(false);
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full items-center justify-between p-6 lg:px-10 bg-background text-text">
        <div className="flex flex-row-reverse">
          <span className="pr-2 text-[18px] text-[#22445D] hidden lg:flex">
            <img src={bahr} alt={t('appName')} />
          </span>
          <img src={h1} className="pr-2 sm:h-9" alt={t('appLogo')} />
        </div>
        <div className="flex lg:flex-1">
          <div className="m-auto mx-[235px] items-center justify-center hidden lg:flex lg:gap-x-8 bg-[#2F2F2F] rounded-[56px] pl-1 pr-[24px] py-[5px]">
            <NavLink
              to="/"

              className={({ isActive }) =>
                `relative text-[16px] text-white flex flex-col items-center ${
                  isActive ? "after:block" : "after:hidden"
                }
                after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-[#ffff] `
              }
            >
              {t('home')}
            </NavLink>

            <NavLink
              to="/CourseList"

              className={({ isActive }) =>
                `relative text-white flex flex-col items-center ${
                  isActive ? "after:block" : "after:hidden"
                }
                after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-[#FFFF]`
              }
            >
              {t('courses')}
            </NavLink>

            <NavLink
              to="/BlogeList"

              className={({ isActive }) =>
                `relative text-white flex flex-col items-center ${
                  isActive ? "after:block" : "after:hidden"
                }
                after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-[#FFFF] `
              }
            >
              {t('blogs')}
            </NavLink>

            {isLoggedIn ? (
              <Link to={"/StudentPanel/edite-profile/profile-info"}>
                <img
                  className="size-full rounded-full w-12 border h-12"
                  src={userInfo?.currentPictureAddress}
                  alt={t('profilePicture')}
                ></img>
              </Link>
            ) : (
              <Link
                to="/auth/RegisterPage"

                className="text-sm/6 text-[#FCFCFC] bg-[#3772FF] rounded-[56px] px-5 py-[8px]"
              >
                {t('registerOrLogin')}
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
              setIsColorModalOpen(false);
            }}
          />
          <button className="rounded-full p-3 bg-[#2F2F2F]">
            <ThemeToggle />
          </button>

          <button
            className="rounded-full w-[48px] h-[48px] border border-[#DCDCDC] text-black flex items-center justify-center bg-[#2F2F2F] text-white"
            onClick={() => setIsAIChatModalOpen(true)}
          >
            <AIChatIcon />
          </button>
          <AIChatModal
            isOpen={isAIChatModalOpen}
            onClose={() => setIsAIChatModalOpen(false)}
          />

          <MultiAccountDropdown />

          <div className="relative" ref={languageDropdownRef}>
            <button
              className="rounded-full w-[48px] h-[48px] border border-[#DCDCDC] text-black flex items-center justify-center bg-[#2F2F2F] text-white"
              onClick={() => setLanguageDropdownOpen((prev) => !prev)}
              aria-expanded={isLanguageDropdownOpen}
              aria-haspopup="true"
            >
              <LanguageIcon />
            </button>
            {isLanguageDropdownOpen && (
              <div
                className="absolute bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-md shadow-lg py-2 mt-2"
                style={{
                  zIndex: 100,
                  minWidth: '120px',
                  [i18n.language === 'fa' ? 'left' : 'right']: 0,
                  [i18n.language === 'fa' ? 'right' : 'left']: 'auto',
                }}
              >
                <div
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => changeLanguage('fa')}
                >
                  {t('farsi')}
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => changeLanguage('en')}
                >
                  {t('english')}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default Header;