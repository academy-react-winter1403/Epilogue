import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next'; 

const SortModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation('blogList'); 

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} 
          />
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[300px] p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.8, translateX: "-50%", translateY: "-50%" }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} 
          >
            <h2 className="text-lg font-bold mb-4">{t('selectFilterOrSort')}</h2> 
            <button
              className="bg-[#3772FF] text-white py-2 rounded-[12px]"
              onClick={onClose}
            >
              {t('close')} 
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SortModal;