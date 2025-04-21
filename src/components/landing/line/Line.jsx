import React, { useEffect, useState } from "react";
import figma from "../../../assets/img/figma.svg";
import react from "../../../assets/img/react.svg";
import three from "../../../assets/img/three.svg";
import HtmlImg from "../../../assets/img/S.svg";
import js from "../../../assets/img/js.png";
import { motion } from "framer-motion";

const icons = [figma, react, js, three, HtmlImg];
const iconAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Line = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    let step = 0;
    const stepInterval = setInterval(() => {
      step++;
      if (step <= icons.length) {
        setCurrentStep(step);
      }
    }, 1000);

    const resetInterval = setInterval(() => {
      step = 0;
      setCurrentStep(0);
      setResetKey((prev) => prev + 1);
    }, 7000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(resetInterval);
    };
  }, []);

  return (
    <div className="relative w-full px-[140px] py-[95px] overflow-hidden">
      <motion.div
        key={resetKey}
        className="absolute top-1/2 right-0 h-1 bg-[#3772FF] rounded-full z-0"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "left" }}
      />

      <div className="relative z-10 flex items-center justify-between w-full">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center"
          >
            <motion.div
              className="absolute bottom-full w-[93px] h-[93px] mb-4"
              variants={iconAnimation}
              initial="initial"
              animate="animate"
            >
              <img src={icon} className="object-contain w-full h-full" />
            </motion.div>

            <div className="relative z-10">
              <div
                className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                  index < currentStep ? "border-[#3772FF]" : "border-[#D9D9D9]"
                } bg-[#FCFCFC]`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Line;
