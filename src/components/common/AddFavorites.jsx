
import faveIcon from "../../assets/icons/faveIcon.svg";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; 

const AddFavorites = ({ isFav, mutation }) => {
  const { t } = useTranslation('dashboard'); 

  return (
    <motion.button
      onClick={() => { mutation?.mutate(!isFav) }}
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
        src={faveIcon}
        alt={isFav ? t('removeFromFavorites') : t('addToFavorites')} 
        className="hidden md:block md:w-[30px] lg:w-[30px] h-[50px]"
      />
      {isFav ? t('removeFromFavorites') : t('addToFavorites')} 
      {mutation?.isPending && <span className="sr-only">{t('processing')}</span>} 
    </motion.button>
  );
};


export { AddFavorites };