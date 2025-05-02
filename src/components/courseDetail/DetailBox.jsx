import React, { useState } from 'react'
import reservIcon from "../../assets/icons/reservIcon.svg"
import { motion } from "framer-motion"
import { DetailModal } from './DetailModal'
import AddCourseFavorite from './AddCourseFavorite'
import { AverageRating } from '../common/starRating/AverageRating'
import  {formatDate}  from '../common/formatDate/formatDate'
import { LikeDislikeCourse } from './likeDislike/LikeDislikeCourse'

const DetailBox = ({course, CourseId}) => {
    console.log('melikajoon', course?.userFavoriteId)
    const [isModalOpen, setIsModalOpen] = useState(false)
 
    const openOverlay = () => {
        setIsModalOpen(true);
        console.log("opend")
    };
    
    const closeOverlay = () => {
        setIsModalOpen(false);
        console.log("closed")
    };

  return (
    <div className='w-[50%] max-w-2xl xl:max-w-4xl h-auto p-4 sm:p-6 flex flex-col justify-between items-center gap-4'>
        <div className=" w-[183px] md:w-[244px] h-[34px] md:h-[46px] font-bold text-2xl sm:text-3xl lg:text-4xl text-black mr-[-40px] md:mr-[10px] lg:mr-[-30px] self-start md:self-start lg:self-start whitespace-nowrap"><h2>{course?.title}</h2></div>
    
            <div className="lg:w-[660px] md:w-[630px] border-2 border-transparent rounded-[16px] flex flex-col gap-5 md:flex-row lg:flex-row md:border-gray-400 md:border-gray-400 lg:border-gray-400 md:gap-0 lg:gap-0">
                
                <div className='w-[361px] md:w-[325px] lg:w-[325px] h-[80px] flex gap-7 border-2 border-gray-400 md:border-transparent rounded-[16px]'>

                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className='w-[45px] h-[20px] font-medium text-[14px] leading-[100%] text-gray-800 pr-3 pt-2'> وضعیت</div>
                            <div className=" h-[27px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-red-500 mr-5 mt-1 flex justify-center items-center text-white whitespace-nowrap">{course?.courseStatusName}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative left-[-120px] top-[-31px] md:top-[-30.5px] md:left-[-110px]"></div>
                    </div>
                    
                    <div>
                    <div className='flex flex-col gap-4'>
                        <div className="md:pr-0 pr-6 pt-2 w-[58px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800">دسته‌بندی</div>
                        <div className="flex justify-center items-center whitespace-nowrap w-[99px] h-[27px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-blue-500 mr-7 md:mr-2 mt-1 text-white">
                        {course?.techs[0]}
                        </div>
                    </div>
                    <div className="w-[80px] h-0 border-2 border-transparent -rotate-90  relative top-[-30.5px] left-[-110px] md:border-gray-400"></div>
                    </div>
                    
                </div>

                <div className='w-[361px] md:w-[325px] lg:w-[325px] h-[80px] border-2 flex gap-7 border-gray-400 md:border-transparent rounded-[16px]'>
                    <div>
                        <div className='flex flex-col gap-4 md:mr-[5px] lg:mr-[-30px]'>
                            <div className="md:pr-[-20px] lg:pr-[25px] mr-3 pt-2 w-[76px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">سطح آموزشی</div>
                            <div className="md:mr-[10px] lg:mr-[30px] mr-3 mt-1  h-[27px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-[#FF37F5] text-white whitespase-nowrap">{course?.courseLevelName}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative top-[-31px] left-[-120px] md:top-[-30.5px] md:left-[-120px] lg:left-[-90px]"></div>
                    </div>

                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className="md:pr-10 lg:pr-5 pr-15 pt-2 w-[60px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">استاد دوره</div>
                            <div className="md:pr-5 pr-15 pt-3 w-[152px] h-[23px] top-[37px] left-[25px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black whitespace-nowrap">{course?.teacherName}</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="lg:w-[660px] md:w-[630px] border-2 border-transparent rounded-[16px] flex flex-col gap-5 md:flex-row md:border-gray-400 md:gap-0">
                
                <div className='w-[361px] md:w-[325px] lg:w-[325px] h-[80px] flex gap-7 border-2 border-gray-400 md:border-transparent rounded-[16px]'>

                    <div>
                        <div className='flex flex-col gap-4'> 
                            <div className='pr-3 pt-2 w-[45px] h-[20px] font-medium text-[14px] leading-[100%] text-gray-800 whitespace-nowrap'>تاریخ برگزاری</div>
                            <div className="pr-3 pt-2 w-[124px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%]  text-right text-black whitespace-nowrap">{formatDate(course?.startTime)}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative top-[-23px] left-[-120px] md:top-[-22.5px] md:left-[-130px]"></div>
                    </div>
                    
                    <div>
                    <div className='flex flex-col gap-4'>
                        <div className="md:pr-8 pr-5 pt-2 w-[58px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">تاریخ اتمام</div>
                        <div className="md:pr-8 pr-5 pt-2 w-[96px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black whitespace-nowrap">{formatDate(course?.endTime)}</div>
                    </div>
                    <div className="w-[80px] h-0 border-2 border-transparent -rotate-90  relative top-[-22px] left-[-130px] md:border-gray-400"></div>
                    </div>
                    
                </div>

                <div className='w-[361px] md:w-[325px] lg:w-[325px] h-[80px] border-2 flex gap-7 border-gray-400 md:border-transparent rounded-[16px]'>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className="pr-3 pt-2 w-[76px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">تعداد لایک</div>
                            <div className="pr-3 pt-2 w-[47px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black">{course?.likeCount}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative top-[-23px] md:top-[-22.5px] left-[-120px]"></div>
                    </div>

                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className="pr-16 pt-2 w-[60px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">تعداد دیس‌لایک</div>
                            <div className="pr-16 pt-2 w-[39px] h-[23px] top-[37px] left-[25px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black">{course?.dissLikeCount}</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="w-[311px] lg:w-[311px] lg:w-[660px] md:w-[630px] md:h-[34px] h-[29px] flex justify-between">
                <div className='flex gap-2 justify-center items-center'>
                    <div>( {course?.currentRate} )</div>
                    <AverageRating 
                        value={course?.courseRate}
                        size="md" 
                    />
                    +
                    <div>( {course?.commentCount} )نظرات</div>
                </div>
                <div className='z-[2] flex items-center justify-end bg-white md:bg-transparent shadow-[0_-5px_10px_-7px_rgba(0,0,0,0.2)] md:shadow-none w-[200px] md:w-auto lg:w-auto h-[80px] md:h-auto fixed top-[1410px] left-0 md:static lg:static text-left'><span className="font-dana font-bold text-[24px] leading-none tracking-normal text-right">{course?.cost.toLocaleString()}</span> تومان</div>
            </div>
            
            <div className='flex gap-4'>
                <div className='md:z-0 flex items-center justify-start w-[600px] h-[80px] md:h-auto md:w-auto lg:w-auto fixed top-[1410px] right-0 md:static lg:static bg-white md:bg-transparent shadow-[0_-5px_10px_-7px_rgba(0,0,0,0.2)] md:shadow-none'>
                    <motion.button
                        onClick={openOverlay}
                        className="flex gap-2 justify-center items-center cursor-pointer w-[194px] h-[56px] rounded-[40px] pt-[13.5px] pr-[44px] pb-[13.5px] pl-[44px] bg-[#3772FF]"
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 1 }}
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
                        <img src={reservIcon} alt="reservation"/>
                        <span className='text-white whitespace-nowrap font-bold'>رزرو دوره</span>
                    </motion.button>
                </div>
                <AddCourseFavorite CourseId={CourseId} isFav={course?.isUserFavorite} userFavoriteId={course?.userFavoriteId} />
                <LikeDislikeCourse CourseId={CourseId} userLikeId={course?.userLikeId} currentUserLike={course?.currentUserLike} currentUserDissLike={course?.currentUserDissLike}/>
            </div>
        <DetailModal isModalOpen={isModalOpen} closeOverlay={closeOverlay} />
    </div>
  )
}

export { DetailBox }
