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

import { useTranslation } from "react-i18next";
import { AIChatModal, AIChatIcon } from "./AIChatModal";
import MultiAccountDropdown from "./MultiAccountDropdown";

const LanguageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-languages"
  >
    <path d="m5 8 6 6" />
    <path d="m4 14 6-6 2-3" />
    <path d="M2 5h12" />
    <path d="M7 2h1" />
    <path d="m22 22-5-10-5 10" />
    <path d="M14 18h6" />
  </svg>
);

const SuggestedPagesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-lightbulb"
  >
    <path d="M15 14c.2-1 .7-2 1.5-3a4.8 4.8 0 0 0-3.5-3.5c-1-.8-2-1.3-3-1.5" />
    <path d="M9 18c.2-1 .7-2 1.5-3" />
    <path d="M2 17c.2-1 .7-2 1.5-3" />
    <path d="M22 17c-.2-1-.7-2-1.5-3" />
    <path d="M11 20H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    <path d="M12 5V2" />
    <path d="M4.2 14.8c1.3.4 2.5 1 3.5 1.7" />
    <path d="M19.8 14.8a8 8 0 0 0-3.5 1.7" />
    <path d="M16 16.5A4.8 4.8 0 0 0 17 18c1.3.4 2.5 1 3.5 1.7" />
  </svg>
);

const ThreeDotsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-more-horizontal"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const Header = ({ openSuggestedPagesModal, isSuggestedPagesModalOpen }) => {
  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });

  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [isAIChatModalOpen, setIsAIChatModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const languageDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const moreDropdownContentRef = useRef(null);

  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setLanguageDropdownOpen(false);
      }
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target)
      ) {
        setIsMoreDropdownOpen(false);
        setLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (moreDropdownContentRef.current) {
      if (isMoreDropdownOpen) {
        gsap.fromTo(
          moreDropdownContentRef.current,
          { opacity: 0, y: -10, scaleY: 0.8, transformOrigin: "top" },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.2,
            ease: "power2.out",
            display: "block",
          }
        );
      } else {
        gsap.to(moreDropdownContentRef.current, {
          opacity: 0,
          y: -10,
          scaleY: 0.8,
          duration: 0.2,
          ease: "power2.in",
          transformOrigin: "top",
          display: "none",
        });
      }
    }
  }, [isMoreDropdownOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
    setLanguageDropdownOpen(false);
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full items-center justify-between p-6 lg:px-10 bg-background text-text">
        <div className="flex flex-row-reverse">
          <span className="pr-2 text-[18px] text-[#22445D] hidden lg:flex">
            <img src={bahr} alt={t("appName")} />
          </span>
          <img src={h1} className="pr-2 sm:h-9" alt={t("appLogo")} />
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
              {t("home")}
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
              {t("courses")}
            </NavLink>

            <NavLink
              to="/BlogeList"
              className={({ isActive }) =>
                `relative text-white flex flex-col items-center ${
                  isActive ? "after:block" : "after:hidden"
                }
                after:content-[''] after:w-1 after-h-1 after:rounded-full after:bg-[#FFFF] `
              }
            >
              {t("blogs")}
            </NavLink>

            {isLoggedIn ? (
              <Link to={"/StudentPanel/edite-profile/profile-info"}>
                <img
                  className="size-full rounded-full p-6 w-12 border h-12"
                  src={userInfo?.currentPictureAddress}
                  alt={t("profilePicture")}
                ></img>
              </Link>
            ) : (
              <Link
                to="/auth/RegisterPage"
                className="text-[10px] text-nowrap text-[#FCFCFC] bg-[#3772FF] rounded-[56px] px-5 py-3 "
              >
                {t("registerOrLogin")}
              </Link>
            )}
          </div>
        </div>
        <div className="gap-[8px] hidden lg:flex relative">
          <div className="relative" ref={moreDropdownRef}>
            <button
              className="rounded-full w-[48px] h-[48px] border border-[#DCDCDC] text-black flex items-center justify-center bg-[#2F2F2F] text-white"
              onClick={() => setIsMoreDropdownOpen((prev) => !prev)}
              title="بیشتر"
            >
              <ThreeDotsIcon />
            </button>
            <div
              ref={moreDropdownContentRef}
              className={`absolute bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-md shadow-lg py-2 mt-2
                          ${isMoreDropdownOpen ? "block" : "hidden"}
                          ${i18n.language === "fa" ? "left-0" : "right-0"}`}
              style={{ zIndex: 100, minWidth: "160px" }}
            >
              <div
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3 transition-colors"
                onClick={() => {
                  setIsAIChatModalOpen(true);
                  setIsMoreDropdownOpen(false);
                }}
              >
                <AIChatIcon />
                <span>{t("aichat")}</span>
              </div>
              <MultiAccountDropdown
                onCloseParentDropdown={() => setIsMoreDropdownOpen(false)}
              />

              <div className="relative" ref={languageDropdownRef}>
                <div
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3 transition-colors"
                  onClick={() => setLanguageDropdownOpen((prev) => !prev)}
                  aria-expanded={isLanguageDropdownOpen}
                  aria-haspopup="true"
                >
                  <LanguageIcon />
                  <span>{t("language")}</span>
                </div>
                {isLanguageDropdownOpen && (
                  <div
                    className={`absolute bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-md shadow-lg py-2
                                ${
                                  i18n.language === "fa"
                                    ? "left-full top-0 ml-2"
                                    : "right-full top-0 mr-2"
                                }`}
                    style={{
                      zIndex: 101,
                      minWidth: "120px",
                      [i18n.language === "fa" ? "right" : "right"]: "100%",
                      [i18n.language === "en" ? "right" : "right"]: "auto",
                      top: 0,
                      transform:
                        i18n.language === "en"
                          ? "translateX(8px)"
                          : "translateX(-8px)",
                    }}
                  >
                    <div
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                      onClick={() => {
                        changeLanguage("fa");
                        setIsMoreDropdownOpen(false);
                      }}
                    >
                      {t("farsi")}
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                      onClick={() => {
                        changeLanguage("en");
                        setIsMoreDropdownOpen(false);
                      }}
                    >
                      {t("english")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={openSuggestedPagesModal}
            className="rounded-full w-[48px] h-[48px] border border-[#DCDCDC] text-black flex items-center justify-center bg-[#2F2F2F] text-white"
            title="صفحات پیشنهادی"
          >
            <SuggestedPagesIcon />
          </button>

          <button className="rounded-full p-3 bg-[#2F2F2F]">
            <ThemeToggle />
          </button>

          <AIChatModal
            isOpen={isAIChatModalOpen}
            onClose={() => setIsAIChatModalOpen(false)}
          />
          <ColorThemeModal
            isOpen={isColorModalOpen}
            onClose={() => setIsColorModalOpen(false)}
            onSelect={(color) => {
              setIsColorModalOpen(false);
            }}
          />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
