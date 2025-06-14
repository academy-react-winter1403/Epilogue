import React from "react";
import Header from "../../../components/common/Dashboard/Header"; // Adjust path if needed
import DashboardMenu from "../../../components/common/Dashboard/Menu"; // Adjust path if needed
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Joyride from "react-joyride";
import Cookies from "js-cookie";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const JOYRIDE_COOKIE_NAME = "joyrideCompleted";

const DashboardLayout = () => {
  const { t } = useTranslation('dashboard'); // Use the 'dashboard' namespace

  const steps = [
    {
      placement: "center",
      target: "body",
      content: t('joyrideWelcome'), // Translated
    },
    {
      target: "#mycourse",
      content: t('joyrideMyCourses'), // Translated
    },
    {
      target: "#reserve",
      content: t('joyrideMyReservations'), // Translated
    },
    {
      target: "#editprofile",
      content: t('joyrideEditProfile'), // Translated - Note: original said "پرداخت کنی" (pay), changed to "ویرایش کنی" (edit) in fa.json for consistency with common use-case.
    },
    {
      placement: "center",
      target: "body",
      content: t('joyrideFarewell'), // Translated
    },
  ];

  const [run, setRun] = useState(false);

  useEffect(() => {
    // Only run the tour if the cookie is not set
    if (!Cookies.get(JOYRIDE_COOKIE_NAME)) {
      setRun(true);
    }
  }, []);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === "finished" || status === "skipped") {
      setRun(false);
      // Set cookie only if tour is finished or skipped
      if (status === "finished" || status === "skipped") { // Ensure cookie is set on skip too
        Cookies.set(JOYRIDE_COOKIE_NAME, "true", { expires: 30 }); // Store for 30 days
      }
    }
  };

  return (
    <>
      <Joyride
        callback={handleJoyrideCallback}
        steps={steps}
        continuous
        run={run} // Use the state directly, as the initial check is in useEffect
        showProgress
        showSkipButton
        hideCloseButton
        scrollToFirstStep
        locale={{
          back: t('joyrideBack'), // Translated
          close: t('joyrideClose'), // Translated
          last: t('joyrideLast'), // Translated
          next: t('joyrideNext'), // Translated
          skip: t('joyrideSkip'), // Translated
        }}
        styles={{ options: { primaryColor: "#3772FF" } }}
      />

      <div className="w-full h-screen bg-[#242424] flex flex-col">
        <Toaster />
        <div className=" bg-[#242424]">
          <Header />
        </div>

        <div className="flex flex-row flex-grow px-6 py-3 overflow-y-auto">
          <div className="bg-[#242424] hidden lg:flex text-white flex flex-col">
            <DashboardMenu />
          </div>
          <div className="flex-grow border themed-dashTable-header bg-white rounded-3xl overflow-y-auto overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;