import faveIcon from "../../assets/icons/faveIcon.svg"
import { motion } from "framer-motion"
import { getItem } from "../../core/utils/storage.services"
import { useNavigate } from "react-router-dom"

const AddFavorites = ({isFav, mutation}) => {
  const navigat = useNavigate()
  return (
    <motion.button  
    onClick={()=>{
      localStorage.getItem('token') ? mutation?.mutate(!isFav) : navigat('/auth/login')}}      
    className={"flex justify-center gap-4 items-center whitespace-nowrap text-white text-[16px] md:font-bold cursor-pointer w-[218px] md:w-[90%] lg:w-[90%] h-[50px] rounded-[40px] pt-[13.5px] pr-[47px] pb-[13.5px] pl-[47px] bg-[#2F2F2F]"}
    whileTap={{ scale: 0.95 }}
    animate={{ opacity: [0.8, 1] }}
    transition={{
      type: "spring",
      mass: 1,
      stiffness: 80,
      damping: 20,
      duration: 1.5
    }}
    disabled={mutation?.isPending}
  >
  <img 
      src={isFav ? faveIcon : faveIcon} 
      alt={isFav ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'} 
      className="hidden md:block md:w-[30px] lg:w-[30px] h-[50px]"
    />
    {isFav ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
    {mutation?.isPending && <span className="sr-only">در حال پردازش...</span>}
  </motion.button>
  )
}

export { AddFavorites }
