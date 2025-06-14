import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import w1 from "../../../assets/img/w1.png";
import w2 from "../../../assets/img/w2.png";
import m3 from "../../../assets/img/m3.png";
import m2 from "../../../assets/img/m2.png";
import w3 from "../../../assets/img/w3.png";
import m1 from "../../../assets/img/m1.png";
import { getLandingReport } from "../../../core/services/api/LandingApi/getLandingReport";

import { useTranslation } from 'react-i18next';

const FirstSection = () => {
  const [landingReport, setlandingReport] = useState([]);
  const { t, i18n } = useTranslation('firstSection'); 

  const getReportlist = async () => {
    const landingReport = await getLandingReport();
    setlandingReport(landingReport);
    console.log(landingReport, "landingReport");
  };
  useEffect(() => {
    getReportlist();
  }, []);

  return (
    <div className="mx-auto flex flex-col max-w-7xl items-center justify-between gap-y-[48px] p-6 lg:px-10 lg:flex-row gap-2 lg:gap-[160px]">
      <div className="w-[200px] h-[80px] order-2 lg:order-1 ">
        <div className=" flex flex-row relative left-[75px] lg:left-0">
          <div className=" absolute top-0 right-0 rounded-full">
            <img className="w-8 h-8" src={m3} alt={t('activeStudents')} />
          </div>

          <div className=" absolute top-0 right-6 rounded-full">
            <img className="w-8 h-8" src={w2} alt={t('activeStudents')} />
          </div>

          <div className="absolute top-0 right-12 rounded-full">
            <img className="w-8 h-8" src={w1} alt={t('activeStudents')} />
          </div>

          <a className="text-2xl font-bold font-yekan-600 pr-[85px]">+{landingReport.studentCount}</a>
          <a className="text-[14px] font-yekan-500 m-auto text-nowrap px-2">
            {t('activeStudents')} 
          </a>
        </div>

        <div className="flex flex-row relative py-4">
          <div className="absolute top-4 right-0 rounded-full">
            <img className="w-8 h-8" src={m2} alt={t('topTeachers')} />
          </div>
          <div className=" absolute top-4 right-6 rounded-full">
            <img className="w-8 h-8" src={w3} alt={t('topTeachers')} />
          </div>
          <div className="absolute top-4 right-12 rounded-full">
            <img className="w-8 h-8" src={m1} alt={t('topTeachers')} />
          </div>
          <a className="text-2xl font-bold font-yekan-600 pr-[85px]">+{landingReport.teacherCount}</a>
          <a className="text-[14px] m-auto font-yekan-500 text-nowrap px-2">
            {t('topTeachers')} 
          </a>
        </div>
      </div>
      <div className="w-[295px] h-[196px] flex flex-col order-1 lg:order-2 ">
        <h1 className="m-auto font-bold font-yekan-700 text-nowrap text-[40px]">
          {t('modernEducation')}
        </h1>
        <h1 className="m-auto font-bold font-yekan-700 text-nowrap text-[40px]">
          {t('rapidProgress')}
        </h1>
        <p className=" pt-6 lg:pt-6 text-nowrap font-yekan-500 text-[#707070] text-[18px]">
          {t('academyName')} 
        </p>
        <p className="m-auto text-nowrap font-yekan-500 text-[#707070] text-[18px]">
          {t('ageRange')} 
        </p>
      </div>
      <div className="w-[150px] h-[111px] flex flex-col order-3 lg:order-3">
        <h1 className="text-nowrap font-yekan-500 text-[18px]">{t('startLearningNow')}</h1>
        <h1 className="text-nowrap text-[18px] pb-3">{t('startLearningPhrase')}</h1>
        <NavLink to="">
          <button
            className="flex flex-col items-center justify-center text-[16px] font-yekan-500 h-[47px] w-[150px] text-[#FCFCFC] bg-[#2F2F2F] rounded-[56px]"
          >
            {t('latestCourses')} 
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default FirstSection;