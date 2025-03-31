import React from 'react'
import addIcone from "../../assets/icons/addIcone.svg"
import { motion } from "framer-motion"
import { toast } from 'react-hot-toast';

const AddFavorites = () => {

  return (
    <motion.button        
    className="cursor-pointer w-[332px] h-[56px] rounded-[40px] pt-[13.5px] pr-[47px] pb-[13.5px] pl-[47px] bg-[#2F2F2F]"
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
    <img src={addIcone} alt="Add to wishlist" />
    </motion.button>
    
  )
}

export { AddFavorites }
