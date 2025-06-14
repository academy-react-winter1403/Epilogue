import React, { useState } from "react";
import { logout } from "../../../core/utils/logout.services";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Logout03Icon } from "../Icons/LogoutIcon";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const LogoutButton = () => {
  const { t } = useTranslation('dashboard'); // Use the 'dashboard' namespace

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <button className="rounded-[45px]" onClick={handleOpen} style={{ width: "100%" }}>
        <div className="flex items-center py-[10px] px-2 rounded-[45px] border border-[#FF5353] duration-200 w-full cursor-pointer">
          <Logout03Icon size={"24px"} />
          <p className="text-[16px] font-yekan-500 text-[#FF5353] flex items-center justify-center m-auto">
            {t('logoutOfAccount')}{" "} {/* Translated: خروج از حساب کاربری */}
          </p>
        </div>
      </button>
      {/* modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ type: "spring", mass: 1, stiffness: 80, damping: 20 }}
            className="fixed w-full h-full top-0 left-0 bg-black/40 z-40 md:backdrop-blur transition-all"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 1, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1.3 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 80,
                damping: 20,
              }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[430px] h-[169px] bg-white rounded-[32px] shadow-lg z-50 p-6"
            >
              <div className="absolute w-[330px] h-[29px] top-[24px] left-[50px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-right text-[#000000] whitespace-nowrap">
                <h2>{t('areYouSureYouWantToLogOut')}</h2> {/* Translated: آیا از خروج خود مطمئن هستید؟ */}
              </div>

              <motion.button
                onClick={() => {
                  console.log('logged out');
                  logout();
                  navigate("/");
                }}
                className="cursor-pointer absolute w-[112px] h-[47px] top-[100px] left-[50px] gap-[8px] rounded-[40px] pt-[9px] pr-[75px] pb-[9px] pl-[75px] bg-[#ff4d4f] text-white font-dana font-bold"
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
                <p className="flex items-center justify-center">{t('yes')}</p> {/* Translated: بله */}
              </motion.button>

              <motion.button
                onClick={handleClose}
                className="cursor-pointer absolute w-[112px] h-[47px] top-[100px] left-[250px] gap-[8px] rounded-[40px] pt-[9px] pr-[75px] pb-[9px] pl-[75px] bg-[#333] text-white font-dana font-bold"
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
                <p className="flex items-center justify-center">{t('no')}</p> {/* Translated: خیر */}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { LogoutButton };