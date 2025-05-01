import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SortModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* بک‌دراپ */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // بستن مودال وقتی روی بک‌گراند کلیک میشه
          />

          {/* محتوای مودال */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[300px] p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.8, translateX: "-50%", translateY: "-50%" }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <h2 className="text-lg font-bold mb-4">فیلتر یا ترتیب انتخاب کن</h2>
            <button
              className="bg-[#3772FF] text-white py-2 rounded-[12px]"
              onClick={onClose} // بستن مودال
            >
              بستن
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SortModal;
