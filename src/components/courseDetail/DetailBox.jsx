import React, { useState } from 'react'
import reservIcone from "../../assets/icons/reservIcone.svg"
import likeIcone from "../../assets/icons/like.svg"
import dislikeIcone from "../../assets/icons/dislike.svg"
import { motion } from "framer-motion"
import { DetailModal } from './DetailModal'
import { AddFavorites } from './AddFavorites'

const DetailBox = (course) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
 
    const openOverlay = () => {
        setIsModalOpen(true);
    };
    
    const closeOverlay = () => {
        setIsModalOpen(false);
    };

  return (
    <div className='w-[60%] max-w-2xl xl:max-w-4xl h-auto p-4 sm:p-6 flex flex-col justify-between items-center gap-4'>
        <div className="w-[244px] h-[46px] font-bold text-2xl sm:text-3xl lg:text-4xl text-black border border-gray-400 mr-[-40px] md:mr-[10px] lg:mr-[0] self-start md:self-start lg:self-start"><h2>{course?.title}</h2></div>
    
            <div className="lg:w-[100%] md:w-[115%] border-2 border-transparent rounded-[16px] flex flex-col gap-5 md:flex-row lg:flex-row md:border-gray-400 md:border-gray-400 lg:border-gray-400 md:gap-0 lg:gap-0">
                
                <div className='w-[361px] md:w-[325px] lg:w-[325px] h-[80px] flex gap-7 border-2 border-gray-400 md:border-transparent rounded-[16px]'>

                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className='w-[45px] h-[20px] font-medium text-[14px] leading-[100%] text-gray-800 pr-3 pt-2'> وضعیت</div>
                            <div className="w-[101px] h-[27px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-red-500 mr-5 mt-1">{}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative left-[-120px] top-[-31px] md:top-[-30px] md:left-[-110px]"></div>
                    </div>
                    
                    <div>
                    <div className='flex flex-col gap-4'>
                        <div className="md:pr-4 pr-6 pt-2 w-[58px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800">دسته‌بندی</div>
                        <div className="w-[99px] h-[27px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-blue-500 mr-7 md:mr-5 mt-1">{}</div>
                    </div>
                    <div className="w-[80px] h-0 border-2 border-transparent -rotate-90  relative top-[-30px] left-[-110px] md:border-gray-400"></div>
                    </div>
                    
                </div>

                <div className='w-[361px] md:w-[325px] lg:w-[325px] h-[80px] border-2 flex gap-7 border-gray-400 md:border-transparent rounded-[16px]'>
                    <div>
                        <div className='flex flex-col gap-4 md:mr-[5px] lg:mr-[-30px]'>
                            <div className="md:pr-[25px] lg:pr-[2px] mr-3 pt-2 w-[76px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">سطح آموزشی</div>
                            <div className="md:mr-[35px] lg:mr-[15px] mr-3 mt-1 w-[69px] h-[27px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-[#FF37F5]">{}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative top-[-31px] left-[-120px] md:top-[-30px] md:left-[-90px]"></div>
                    </div>

                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className="md:pr-10 pr-15 pt-2 w-[60px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">استاد دوره</div>
                            <div className="md:pr-10 pr-15 pt-3 w-[152px] h-[23px] top-[37px] left-[25px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black whitespace-nowrap">{}</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="lg:w-[100%] md:w-[115%] border-2 border-transparent rounded-[16px] flex flex-col gap-5 md:flex-row md:border-gray-400 md:gap-0">
                
                <div className='w-[361px] md:w-[325px] lg:w-[325px] h-[80px] flex gap-7 border-2 border-gray-400 md:border-transparent rounded-[16px]'>

                    <div>
                        <div className='flex flex-col gap-4'> 
                            <div className='pr-3 pt-2 w-[45px] h-[20px] font-medium text-[14px] leading-[100%] text-gray-800 whitespace-nowrap'>تاریخ برگزاری</div>
                            <div className="pr-3 pt-2 w-[124px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black">{}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative top-[-23px] left-[-120px] md:top-[-22px] md:left-[-130px]"></div>
                    </div>
                    
                    <div>
                    <div className='flex flex-col gap-4'>
                        <div className="md:pr-8 pr-5 pt-2 w-[58px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">تاریخ اتمام</div>
                        <div className="md:pr-8 pr-5 pt-2 w-[96px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black">{}</div>
                    </div>
                    <div className="w-[80px] h-0 border-2 border-transparent -rotate-90  relative top-[-22px] left-[-130px] md:border-gray-400"></div>
                    </div>
                    
                </div>

                <div className='w-[361px] md:w-[325px] lg:w-[325px] h-[80px] border-2 flex gap-7 border-gray-400 md:border-transparent rounded-[16px]'>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className="pr-3 pt-2 w-[76px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">تعداد لایک</div>
                            <div className="pr-3 pt-2 w-[47px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black">{}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative top-[-23px] md:top-[-22px] left-[-120px]"></div>
                    </div>

                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className="pr-16 pt-2 w-[60px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">تعداد دیس‌لایک</div>
                            <div className="pr-16 pt-2 w-[39px] h-[23px] top-[37px] left-[25px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black">kk{}</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="w-[686px] h-[34px] flex justify-between border border-gray-400"></div>
            
            <div className='flex gap-4'>

                <motion.button
                    onClick={openOverlay}
                    className="cursor-pointer w-[194px] h-[56px] rounded-[40px] pt-[13.5px] pr-[44px] pb-[13.5px] pl-[44px] bg-blue-500"
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
                    <img src={reservIcone} alt="reservation"/>
                </motion.button>
                 {/* modal */}

                <AddFavorites/>

                <div className="w-[56px] h-[56px] top-[473px] left-[113px]">
                    <img src={likeIcone} alt="like"/>
                </div>

                <div className=" w-[56px] h-[56px] top-[473px] left-[41px]">
                    <img src={dislikeIcone} alt="dislike" />
                </div>
            </div>
        <DetailModal isModalOpen={isModalOpen} closeOverlay={closeOverlay} />
    </div>
  )
}

export { DetailBox }
