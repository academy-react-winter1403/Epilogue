import React from 'react';
import { motion } from 'framer-motion';
import closeIcon from '../../../assets/icons/closeIcon.svg';
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose, title, children }) => {
  const { t } = useTranslation('blogList');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-40 md:backdrop-blur flex items-center justify-center">
      <div className="flex flex-col items-center min-h-[400px] md:block relative bg-[#FCFCFC] pb-17 md:pb-0 md:rounded-[32px] p-6 w-[393px] md:w-[851px] lg:w-[851px] rounded-tl-[32px] rounded-tr-[32px]">
        <div className="w-14 h-2 absolute top-[5px] left-[170px] rounded bg-gray-400 md:hidden sm:block"></div>
        <div className="flex justify-between items-center gap-20">
          <div className='flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center'>
            <h2 className="mt-5 md:mt-0 mr-4 h-[34px] font-dana font-bold text[20px] md:text-[24px] leading-[100%] tracking-[0%] text-right whitespace-nowrap">{title}</h2>
            <span className='w-[160px] h-[26px] font-dana font-bold text-[18px] leading-[100%] tracking-[0%] text-right text-[#2F2F2F]'>()</span>
          </div>

          <motion.button
            onClick={onClose}
            className="mt-[-25px] md:mt-0 flex cursor-pointer w-[101px] h-[40px] rounded-[34px] pt-[7px] pr-[16px] pb-[7px] pl-[16px] gap-[8px] border border-[#FF5353] bg-[#FCFCFC]"
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: [0.8, 1] }}
            transition={{ type: "spring", mass: 1, stiffness: 80, damping: 20, duration: 1.5 }}
          >
            <img src={closeIcon} alt="closeIcon" />
            <span className='text-[#FF5353]'>{t('close')}</span>
          </motion.button>
        </div>

        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };