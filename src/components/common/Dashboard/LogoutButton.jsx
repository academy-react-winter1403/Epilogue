import React, { useState } from "react";
import { logout } from "../../../core/utils/logout.services";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Cancel01Icon } from "../Icons/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 20,
  bgcolor: "background.paper",
  p: 1,
  borderRadius: "15px",
};

const LogoutButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <button onClick={handleOpen} style={{ width: "100%" }}>
        <div className=" flex items-center py-[10px] px-2 rounded-[45px] border border-[#FF5353] duration-200 w-full cursor-pointer">
          <Cancel01Icon size={"24px"} />
          <p className="text-[16px] font-yekan-500 text-[#FF5353] flex items-center justify-center m-auto">
            {" "}
            خروج از حساب کاربری{" "}
          </p>
        </div>
      </button>
      {/* modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", mass: 1, stiffness: 80, damping: 20 }}
            className=" fixed w-full h-full top-0 left-0 bg-black/40 z-40 md:backdrop-blur transition-all"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 80,
                damping: 20,
              }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[430px] h-[169px] bg-white rounded-[32px] shadow-lg z-50 p-6"
            >
              <div className="absolute w-[330px] h-[29px] top-[24px] left-[50px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-right text-[#FF5353] whitespace-nowrap">
                <h2>آیا از خروج خود مطمئن هستید؟</h2>
              </div>

              <motion.button
                className="cursor-pointer absolute w-[112px] h-[47px] top-[100px] left-[50px] gap-[8px] rounded-[40px] pt-[9px] pr-[75px] pb-[9px] pl-[75px] bg-blue-500 text-white font-dana font-bold"
                whileTap={{ scale: 0.95 }}
                animate={{
                  opacity: [0.8, 1],
                }}
                transition={{
                  type: "spring",
                  mass: 1,
                  stiffness: 80,
                  damping: 20,
                  duration: 1.5,
                }}
              >
                <p className="flex items-center justify-center">بله</p>
              </motion.button>

              <motion.button
                onClick={handleClose}
                className="cursor-pointer absolute w-[112px] h-[47px] top-[100px] left-[250px] gap-[8px] rounded-[40px] pt-[9px] pr-[75px] pb-[9px] pl-[75px] bg-blue-500 text-white font-dana font-bold"
                whileTap={{ scale: 0.95 }}
                animate={{
                  opacity: [0.8, 1],
                }}
                transition={{
                  type: "spring",
                  mass: 1,
                  stiffness: 80,
                  damping: 20,
                  duration: 1.5,
                }}
              >
                <p className="flex items-center justify-center">خیر</p>
                </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { LogoutButton };
