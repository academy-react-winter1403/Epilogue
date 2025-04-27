import React from "react";
import Header from "../../../components/common/Dashboard/Header";
import DashboardMenu from "../../../components/common/Dashboard/Menu";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Joyride from "react-joyride";
import Cookies from "js-cookie";

const JOYRIDE_COOKIE_NAME = "joyrideCompleted";
const DashboardLayout = () => {
  const steps = [
    {
      placement: "center",
      target: "body",
      content:
        "سلام تازه وارد. ورودت رو تبریک میگم. بریم یه تور اموزشی داشته باشیم!",
    },
    {
      target: "#mycourse",
      content: "اینجا صفحه‌ی دوره های شماست.",
    },
    {
      target: "#reserve",
      content: "و این هم صفحه‌ی رزرو های شماست.",
    },
    {
      target: "#editprofile",
      content: "و از این صفحه میتونی پروفایل خودت رو پرداخت کنی",
    },
    {
      placement: "center",
      target: "body",
      content: "امیدوارم که توضیحات کاملی داده باشم . موفق باشی",
    },
  ];
  const [run, setRun] = useState(false);
  useEffect(() => {
    setRun(true);
  }, []);
  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === "finished" || status === "skipped") {
      setRun(false);
    }
    if (status === "finished") {
      Cookies.set(JOYRIDE_COOKIE_NAME, "true", { expires: 30 });
    }
  };
  return (
    <>
      <Joyride
        callback={handleJoyrideCallback}
        steps={steps}
        continuous
        run={!Cookies.get(JOYRIDE_COOKIE_NAME) && run}
        showProgress
        showSkipButton
        hideCloseButton
        scrollToFirstStep
        locale={{
          back: "قبلی",
          close: "بستن",
          last: "بدرود",
          next: "بعدی",
          skip: "خودم بلدم",
        }}
        styles={{ options: { primaryColor: "#3772FF" } }}
      />

      <div className="w-full h-screen  bg-[#242424] flex flex-col">
        <Toaster />
        <div className=" bg-[#242424]">
          <Header />
        </div>

        <div className="flex flex-row flex-grow px-6 py-3 overflow-y-auto">
          <div className="bg-[#242424] hidden lg:flex text-white flex flex-col">
            <DashboardMenu />
          </div>
          <div className="flex-grow border themed-dashTable-header w-full bg-white rounded-3xl  overflow-y-auto overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
