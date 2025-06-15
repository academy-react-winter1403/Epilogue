
import React, { useState, useEffect } from "react"; 
import Header from "../../../components/common/Dashboard/Header"; 
import DashboardMenu from "../../../components/common/Dashboard/Menu"; 
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Joyride from "react-joyride";
import Cookies from "js-cookie";
import { useTranslation } from 'react-i18next';

import { usePageTimeTracker } from '../../../core/hooks/usePageTimeTracker';
import SuggestedPagesModal from '../../../components/common/SuggestedPagesModal';

const JOYRIDE_COOKIE_NAME = "joyrideCompleted";

const DashboardLayout = () => {
  usePageTimeTracker();

  const { t } = useTranslation('dashboard'); 

  const steps = [
    {
      placement: "center",
      target: "body",
      content: t('joyrideWelcome'), 
    },
    {
      target: "#mycourse",
      content: t('joyrideMyCourses'), 
    },
    {
      target: "#reserve",
      content: t('joyrideMyReservations'), 
    },
    {
      target: "#editprofile",
      content: t('joyrideEditProfile'), 
    },
    {
      placement: "center",
      target: "body",
      content: t('joyrideFarewell'), 
    },
  ];

  const [run, setRun] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (!Cookies.get(JOYRIDE_COOKIE_NAME)) {
      setRun(true);
    }
  }, []);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === "finished" || status === "skipped") {
      setRun(false);
      if (status === "finished" || status === "skipped") { 
        Cookies.set(JOYRIDE_COOKIE_NAME, "true", { expires: 30 }); 
      }
    }
  };

  return (
    <>
      <Joyride
        callback={handleJoyrideCallback}
        steps={steps}
        continuous
        run={run} 
        showProgress
        showSkipButton
        hideCloseButton
        scrollToFirstStep
        locale={{
          back: t('joyrideBack'), 
          close: t('joyrideClose'), 
          last: t('joyrideLast'), 
          next: t('joyrideNext'), 
          skip: t('joyrideSkip'), 
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
      <SuggestedPagesModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default DashboardLayout;