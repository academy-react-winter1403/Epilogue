import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const DetailModal = ({isModalOpen, closeOverlay}) => {
     
  return (
     <AnimatePresence mode='waite'>
        {isModalOpen && (
            <motion.div
            initial={{ opacity:1 }} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", mass: 1, stiffness: 80, damping: 20 }}
            className="fixed w-full h-full top-0 left-0 bg-black/40 z-40 md:backdrop-blur transition-all"
            onClick={closeOverlay}
            >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', mass: 1, stiffness: 80, damping: 20 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[393px] h-[398px] md:w-[430px] md:h-[369px] lg:w-[430px] lg:h-[369px] bg-white rounded-t-[32px] md:rounded-[32px] lg:rounded-[32px] shadow-lg z-50 p-6">
                
                <div className="w-14 h-2 absolute top-[8px] left-[169px] rounded bg-gray-400 md:hidden sm:block"></div>
                <div className='absolute w-[330px] h-[29px] lg:top-[24px] lg:left-[50px] top-[40px] left-[40px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-right text-blue-500 whitespace-nowrap'> <h2>دوره به لیست رزروی های شما اضافه شد!</h2></div>
                <div className='flex flex-col'>
                    <div className="absolute w-[83px] top-[130px] left-[340px] md:top-[100px] md:left-[354px] -rotate-90 border-3 border-[#3772FF]"></div>
                    <div>
                        <div className='absolute w-4 h-4 md:top-[144px] top-[170px] md:left-[388px] left-[373px] border-4 border-[#3772FF] bg-[##F6F6F6] rounded-[50%]'></div>
                        <span  className='text-black absolute md:top-[140px] md:left-[320px] top-[165px] left-[310px]'>رزرو من</span>
                    </div>
                    <div className='absolute w-[83px] md:top-[205px] md:left-[354px] top-[230px] left-[340px] -rotate-90 border-3 border-[#DCDCDC] border-dashed'></div>
                    <div>
                        <div className='absolute w-4 h-4 md:top-[248px] md:left-[388px] top-[273px] left-[373px] border-4 border-[#DCDCDC] rounded-[50%]'></div>
                        <span className='text-black absolute md:top-[240px] md:left-[320px] top-[268px] left-[310px]'> دوره من</span>
                    </div>
                </div>
                <div className='font-[DanaFaNum] font-[500] text-[16px] leading-[100%] tracking-[0%] text-right absolute md:top-[180px] md:left-[50px] top-[210px] left-[50px] w-[245px] h-[46px] '>بعد از تایید ادمین ، دوره مورد نظر به لیست دوره من شما اضافه خواهد شد</div>
                <div className="flex items-center gap-4 absolute md:top-[300px] md:left-[30px] top-[320px] left-[30px]">
                <motion.button
                    className="whitespace-nowrap cursor-pointer w-[184px] md:w-[212px] h-[47px] gap-[8px] rounded-[40px] pt-[9px] pr-[75px] pb-[9px] pl-[75px] bg-blue-500 text-white font-dana font-bold"
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                        opacity: [0.8, 1], 
                        }}
                        transition={{
                        type: "spring",
                        mass: 1,
                        stiffness: 80,
                        damping: 20,
                        duration: 1.5
                        }}
                >
                    رزرو من
                </motion.button>
                <motion.button
                    onClick={closeOverlay}
                   className='w-[154] h-[47] cursor-pointer rounded-[40px] pt-[9px] pr-[58px] pb-[9px] pl-[58px] bg-gray-400'
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                        opacity: [0.8, 1], 
                        }}
                        transition={{
                        type: "spring",
                        mass: 1,
                        stiffness: 80,
                        damping: 20,
                        duration: 1.5
                        }}
                >
                    باشه
                </motion.button>
                </div>
                </motion.div>   
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export { DetailModal }
