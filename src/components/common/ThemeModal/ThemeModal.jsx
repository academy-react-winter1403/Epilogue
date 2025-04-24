import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const colorOptions = ["#3772FF", "#EC4D4A", "#4DCAEC", "#ECAC4A", "#EC4AC9"];

const ColorThemeModal = ({ isOpen, onClose, onSelect }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-[#1F1F1F] rounded-2xl p-6 shadow-xl grid grid-cols-3 gap-4"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="col-span-3 text-lg font-bold text-center mb-2">انتخاب رنگ تم</h2>
            {colorOptions.map((color) => (
              <button
                key={color}
                onClick={() => onSelect(color)}
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                style={{ backgroundColor: color }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ColorThemeModal;
