import React, { useEffect, useState } from "react";
import { Moon02Icon } from "./Icons/MoonIcon";
import { AnimatePresence, motion } from "framer-motion";

const ThemeToggle = () => {
  
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return JSON.parse(saved);

    const hour = new Date().getHours();
    const isDayTime = hour >= 7 && hour <= 19;
    return {
      mode: isDayTime ? "light" : "dark",
      color: "blue",
    };
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(
      "light",
      "dark",
      "theme-blue",
      "theme-green",
      "theme-red",
      "theme-purple",
      "dark",
      "theme-pink",
      "theme-rose"
    );

    root.classList.add(theme.mode);
    root.classList.add(`theme-${theme.color}`);

    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleMode = () => {
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === "dark" ? "light" : "dark",
    }));
  };

  const changeColor = (color) => {
    setTheme((prev) => ({
      ...prev,
      color,
    }));
  };

  return (
    <>
      <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
        <Moon02Icon />
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4 text-text">
                انتخاب تم
              </h2>
              <button
                onClick={toggleMode}
                className="mb-4 bg-primary text-white px-4 py-2 rounded shadow"
              >
                تغییر روز/شب
              </button>

              <div className="flex gap-3 justify-center flex-wrap">
                {["blue", "green", "red", "purple", "dark", "pink", "rose"].map(
                  (color) => (
                    <button
                      key={color}
                      onClick={() => changeColor(color)}
                      className="w-8 h-8 rounded-full relative border-2 border-white hover:scale-110 transition"
                      style={{ backgroundColor: `var(--${color})` }}
                    >
                      {theme.color === color && (
                        <span className="absolute top-0.5 right-0.5 text-white text-xs bg-black/40 rounded-full px-1 leading-none">
                          ✓
                        </span>
                      )}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeToggle;
