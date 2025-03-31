import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const DetailModal = ({isModalOpen, closeOverlay}) => {
     
  return (
     <AnimatePresence>
        {isModalOpen && (
            <motion.div
            initial={{ opacity:0 }} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", mass: 1, stiffness: 80, damping: 20 }}
            className=" fixed w-full h-full top-0 left-0 bg-black/40 z-40 md:backdrop-blur transition-all"
            onClick={closeOverlay}
            >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', mass: 1, stiffness: 80, damping: 20 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[430px] h-[369px] bg-white rounded-[32px] shadow-lg z-50 p-6"
                >
                <div className='absolute w-[330px] h-[29px] top-[24px] left-[50px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-right text-blue-500 whitespace-nowrap'> <h2>دوره به لیست رزروی های شما اضافه شد!</h2></div>
                
                <button onClick={closeOverlay}>بستن</button>
                <motion.button
                    
                    className="cursor-pointer absolute w-[212px] h-[47px] top-[298px] left-[194px] gap-[8px] rounded-[40px] pt-[9px] pr-[75px] pb-[9px] pl-[75px] bg-blue-500 text-white font-dana font-bold"
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
                    Reserve Course
                </motion.button>

                </motion.div>   
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export { DetailModal }
