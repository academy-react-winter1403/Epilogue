import React, { useRef } from "react";
import estedad from "../../../assets/img/estedad.png";
import rahnama from "../../../assets/img/rahnama.png";
import amozesh from "../../../assets/img/amozesh.png";
import cv from "../../../assets/img/cv.png";
import Line from "../../../assets/img/Line.png";
import { TaskDaily01Icon } from "../../common/Icons/TaskIcon";
import { DocumentValidationIcon } from "../../common/Icons/Document-validationIcon";
import { MessageUser01Icon } from "../../common/Icons/Message-userIcon";
import { JobLinkIcon } from "../../common/Icons/Job-Link";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';

const MiddleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: false,
  });

  const { t } = useTranslation('middleSection');

  return (
    <div className="w-auto px-[41px]">
      <div className=" pt-[118px] font-yekan-700 flex flex-col font-bold items-center justify-center pb-[46px] text-nowrap text-[32px]">
        {t('academyGoals')}
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row gap-[25px]">
        <img src={Line} className=" lg:flex hidden absolute" alt="" />

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: -20 }}
          whileInView={{ opacity: 1, x: -10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[100%] z-10 h-[434px] lg:max-w-[321px] themed-box bg-white border-2 cursor-pointer border-[#DCDCDC] rounded-[24px] hover:border-[#3772FF]"
        >
          <div className="p-5">
            <h5 className="pb-[21px] text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
              {t('talentDiscovery')} 
            </h5>
            <p className="text-[16px] font-yekan-500 text-[#7E7E7E]">
              {t('talentDiscoveryDescription')} 
            </p>
            <img className="m-auto py-8" src={estedad} alt="" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: -30 }}
          whileInView={{ opacity: 1, x: -10 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-[100%] z-10 h-[434px] lg:max-w-[321px] themed-box bg-white border-2 cursor-pointer border-[#DCDCDC] rounded-[24px] hover:border-[#3772FF]"
        >
          <div className="p-5">
            <h5 className="pb-[21px] text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
              {t('guidanceAndMotivation')} 
            </h5>
            <p className="text-[16px] font-yekan-500 text-[#7E7E7E]">
              {t('guidanceAndMotivationDescription')}
            </p>
            <img className="m-auto py-6" src={rahnama} alt="" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: -40 }}
          whileInView={{ opacity: 1, x: -10 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-[100%] z-10 h-[434px] lg:max-w-[321px] themed-box bg-white border-2 cursor-pointer border-[#DCDCDC] rounded-[24px] hover:border-[#3772FF]"
        >
          <div className="p-5">
            <h5 className="pb-[21px] text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
              {t('specializedTraining')}
            </h5>
            <p className="text-[16px] font-yekan-500 text-[#7E7E7E]">
              {t('specializedTrainingDescription')} 
            </p>
            <img className="m-auto py-8" src={amozesh} alt="" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: -50 }}
          whileInView={{ opacity: 1, x: -10 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-[100%] z-10 h-[434px] lg:max-w-[321px] themed-box bg-white border-2 cursor-pointer border-[#DCDCDC] rounded-[24px] hover:border-[#3772FF]"
        >
          <div className="p-5">
            <h5 className="pb-[21px] text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
              {t('jobMarketPreparation')} 
            </h5>
            <p className="text-[16px] font-yekan-500 text-[#7E7E7E]">
              {t('jobMarketPreparationDescription')}
            </p>
            <img className="m-auto py-8" src={cv} alt="" />
          </div>
        </motion.div>
      </div>
      <div className=" pt-[118px] pb-[46px] text-nowrap text-[32px] ">
        <a className="flex flex-col items-center justify-center pb-[50px]">
          <a className="font-yekan-700 font-bold">{t('servicesWeOffer')}</a>
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
          <motion.div
            ref={ref}
            whileInView={0}
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full group max-h-[361px] lg:max-w-[664px] lg:min-h-[144px] cursor-pointer themed-box bg-[#F6F6F6] border-2 border-[#DCDCDC] rounded-[24px] hover:border-2 hover-[#3772FF]"
          >
            <div className="p-5 flex flex-col lg:flex-row">
              <div className="max-w-[85px] h-[85px] bg-[#FCFCFC] rounded-full border-2 border-[#DCDCDC] hover:border-2 group-hover-[#4a6eec]">
                <div className="p-5 m-auto">
                  <DocumentValidationIcon />
                </div>
              </div>
              <div className="flex flex-col overflow-hidden break-words whitespace-normal px-5 py-3">
                <h5 className="mb-2 text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
                  {t('validCertificate')}
                </h5>
                <p className="mb-3 text-[16px] font-yekan-500 text-[#7E7E7E]">
                  {t('validCertificateDescription')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-full group max-h-[361px] lg:max-w-[664px] lg:min-h-[144px] cursor-pointer themed-box bg-[#F6F6F6] border-2 border-[#DCDCDC] rounded-[24px] hover:border-2 hover-[#EC4D4A]"
          >
            <div className="p-5 flex flex-col lg:flex-row">
              <div className="max-w-[85px] h-[85px] bg-[#FCFCFC] rounded-full border-2 border-[#DCDCDC] hover:border-2 group-hover-[#EC4D4A]">
                <div className="p-5 m-auto">
                  <TaskDaily01Icon />
                </div>
              </div>
              <div className="flex flex-col overflow-hidden break-words whitespace-normal px-5 py-3">
                <h5 className="mb-2 text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
                  {t('exams')} 
                </h5>
                <p className="mb-3 text-[16px] font-yekan-500 text-[#7E7E7E]">
                  {t('examsDescription')} 
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="w-full group max-h-[361px] lg:max-w-[664px] lg:min-h-[144px] cursor-pointer themed-box bg-[#F6F6F6] border-2 border-[#DCDCDC] rounded-[24px] hover:border-2 hover-[#ECAC4A]"
          >
            <div className="p-5 flex flex-col lg:flex-row">
              <div className="max-w-[85px] h-[85px] bg-[#FCFCFC] rounded-full border-2 border-[#DCDCDC] hover:border-2 group-hover-[#ECAC4A]">
                <div className="p-5 m-auto">
                  <MessageUser01Icon />
                </div>
              </div>
              <div className="flex flex-col overflow-hidden break-words whitespace-normal px-5 py-3">
                <h5 className="mb-2 text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
                  {t('24HourConsultation')}
                </h5>
                <p className="mb-3 text-[16px] font-yekan-500 text-[#7E7E7E]">
                  {t('24HourConsultationDescription')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="w-full group max-h-[361px] lg:max-w-[664px] lg:min-h-[144px] cursor-pointer themed-box bg-[#F6F6F6] border-2 border-[#DCDCDC] rounded-[24px] hover:border-2 hover-[#EC4AC9]"
          >
            <div className="p-5 flex flex-col lg:flex-row">
              <div className="max-w-[85px] h-[85px] bg-[#FCFCFC] rounded-full border-2 border-[#DCDCDC] hover:border-2 group-hover-[#EC4AC9]">
                <div className="p-5 m-auto">
                  <JobLinkIcon />
                </div>
              </div>
              <div className="flex flex-col w-[80%] overflow-hidden break-words whitespace-normal px-5 py-3">
                <h5 className="mb-2 text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
                  {t('jobOpportunities')} 
                </h5>
                <p className="text-[16px] font-yekan-500 text-[#7E7E7E]">
                  {t('jobOpportunitiesDescription')} 
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;