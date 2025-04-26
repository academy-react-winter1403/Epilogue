import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import faveIcon from "../../assets/icons/faveIcon.svg"
import { motion } from "framer-motion"
import { toast } from 'react-hot-toast';
import { postAddCourseFavorite, deleteCourseFavorite } from '../../core/services/api/courseDetail/postAddCourseFavorite'

const AddFavorites = ({CourseId, isFav}) => {
  const queryClient = useQueryClient();

  const { mutate: toggleFavorite, isLoading } = useMutation({
    mutationFn: async () => {
      if (isFav) {
        return await deleteCourseFavorite(CourseId);
      } else {
        return await postAddCourseFavorite(CourseId);
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['courseDetails', CourseId]);
      toast.success(data.message, {
        style: {
          position: 'relative',
          top: '450px',
          left: '300px',
        }
      });
    },
    onError: (error) => {
      toast.error('خطا در انجام عملیات', {
        style: {
          position: 'relative',
          top: '450px',
          right: '300px',
        }
      });
      console.error('Error:', error);
    }
  });

  const handleFavoriteClick = () => {
    if (!isLoading) {
      toggleFavorite();
    }
  };
    
  return (

    <motion.button  
    onClick={handleFavoriteClick}      
    className={"flex justify-center gap-4 items-center whitespace-nowrap text-white text-[16px] md:font-bold cursor-pointer w-[218px] md:w-[325px] lg:w-[332px] h-[56px] rounded-[40px] pt-[13.5px] pr-[47px] pb-[13.5px] pl-[47px] bg-[#2F2F2F]"}
    whileTap={{ scale: 0.95 }}
    animate={{ opacity: [0.8, 1] }}
    transition={{
      type: "spring",
      mass: 1,
      stiffness: 80,
      damping: 20,
      duration: 1.5
    }}
    disabled={isLoading}
  >
  <img 
      src={isFav ? faveIcon : faveIcon} 
      alt={isFav ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'} 
      className="hidden md:block md:w-[30px] lg:w-[30px] h-[50px]"
    />
    {isFav ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
    {isLoading && <span className="sr-only">در حال پردازش...</span>}
  </motion.button>
  )
}

export { AddFavorites }
