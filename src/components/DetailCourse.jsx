import React, { Fragment, useState } from 'react'
import reservIcone from "../assets/icons/reservIcone.svg"
import addIcone from "../assets/icons/addIcone.svg"
import likeIcone from "../assets/icons/like.svg"
import dislikeIcone from "../assets/icons/dislike.svg"
import { motion, AnimatePresence } from "framer-motion"

const DetailCourse = () => {
     const [isModalOpen, setIsModalOpen] = useState(false)
        
        const openOverlay = () => {
            setIsModalOpen(true);
        };
        
        const closeOverlay = () => {
            setIsModalOpen(false);
        };
    
  return (
    <section className="border border-green-500 w-full grid grid-cols-1 gap-5 grid-rows-2">

        <div className='w-[full] h-auto p-4 flex justify-between md:flex-row gap-15 items-center border border-gray-400 mb-6 md:mb-[150px] '>
            <div className="w-full md:w-[50%] h-[300px] md:h-[424px] border border-pink-400">
                <img src="" alt="" className="w-full h-full object-cover"/>
            </div>

            <div className='w-[50%] h-auto p-4 flex flex-col  justify-between items-center border border-gray-400 gap-4'>

                <div className=" w-[244px] h-[46px] font-bold text-[32px] text-black border border-gray-400 self-start"><h2>{}</h2></div>

                <div className=" w-[668px] h-[80px] border-2 border-gray-400 rounded-[16px] flex justify-between items-center">

                    <div className='relative'>
                        <div className='absolute top-[-15px] left-[45px] w-[45px] h-[20px] font-medium text-[14px] leading-[100%] text-gray-800 '> وضعیت</div>
                        <div className="block mt-[20px] transform -translate-x-4 -translate-y-[-8px] w-[101px] h-[27px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-red-500">{}</div>
                    </div>
                    <div className=" w-[79px] h-0 border-2 -rotate-90 border-gray-400 relative left-[-10px]"></div>

                    <div className='relative'>
                        <div className="absolute top-[-15px] left-[60px] w-[58px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800">دسته‌بندی</div>
                        <div className="transform -translate-x-[-15px] -translate-y-[-8px] w-[99px] h-[27px] top-[37px] left-[390px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-blue-500">{}</div>
                    </div>
                    <div className="w-[79px] h-0 border-2 -rotate-90 border-gray-400 relative left-[10px]"></div>

                    <div className='relative'>
                        <div className="absolute top-[-15px] left-[30px] w-[76px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">سطح آموزشی</div>
                        <div className="transform -translate-x-[-35px] -translate-y-[-8px] w-[69px] h-[27px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-[#FF37F5]">{}</div>
                    </div>
                    <div className=" w-[79px] h-0 border-2 -rotate-90 border-gray-400"></div>

                    <div className='relative'>
                        <div className="absolute top-[-15px] left-[120px] w-[60px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800">استاد دوره</div>
                        <div className="transform -translate-x-4 -translate-y-[-8px] w-[152px] h-[23px] top-[37px] left-[25px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black whitespace-nowrap">{}</div>
                    </div>
                    
                </div>
                <div className=" w-[668px] h-[80px] border-2 border-gray-400 rounded-[16px] flex justify-between items-center">

                    <div className='relative'> 
                        <div className='absolute top-[-15px] left-[65px] w-[45px] h-[20px] font-medium text-[14px] leading-[100%] text-gray-800 whitespace-nowrap'>تاریخ برگزاری</div>
                        <div className="transform -translate-x-4 -translate-y-[-20px] w-[124px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black">{}</div>
                    </div>

                    <div className=" w-[79px] border-2 -rotate-90 border-gray-400 relative left-[15px]"></div>
                    <div className='relative'>
                        <div className="absolute top-[-15px] left-[100px] w-[58px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">تاریخ اتمام</div>
                        <div className="transform -translate-x-[-57px] -translate-y-[-20px] w-[96px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black">{}</div>
                    </div>

                    <div className="w-[79px] border-2 -rotate-90 border-gray-400 relative left-[60px]"></div>
                    <div className='relative'>
                        <div className="absolute top-[-15px] left-[80px] w-[76px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">تعداد لایک</div>
                        <div className="transform -translate-x-[-107px] -translate-y-[-20px] w-[47px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black">{}</div>
                    </div>

                    <div className="w-[79px] border-2 -rotate-90 border-gray-400 relative left-[65px]"></div>
                    <div className='relative'>
                        <div className="absolute top-[-15px] left-[90px] w-[60px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">تعداد دیس‌لایک</div>
                        <div className="transform -translate-x-[-107px] -translate-y-[-20px] w-[39px] h-[23px] top-[37px] left-[25px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black">{}</div>
                    </div>
                </div>
                <div className=" w-[686px] h-[34px] flex justify-between border border-gray-400"></div>
                
                <div className='flex gap-4'>
                    <motion.button
                        onClick={openOverlay}
                        className="cursor-pointer w-[194px] h-[56px] gap-[8px] rounded-[40px] pt-[13.5px] pr-[44px] pb-[13.5px] pl-[44px] bg-blue-500 text-white font-dana font-bold flex items-center justify-center"
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
                        <img src={reservIcone} alt="reservation" />
                    </motion.button>

                    <div className=" w-[332px] h-[56px] top-[473px] left-[185px] rounded-[40px] gap-[8px] pt-[13.5px] pr-[47px] pb-[13.5px] pl-[47px] bg-black">
                        <img src={addIcone} alt="Add to wishlist" />
                    </div>
                    <div className=" w-[56px] h-[56px] top-[473px] left-[113px]">
                        <img src={likeIcone} alt="like" />
                    </div>

                    <div className=" w-[56px] h-[56px] top-[473px] left-[41px]">
                        <img src={dislikeIcone} alt="dislike" />
                    </div>
                </div>
                
                {/* modal */}
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

            </div>
        </div>

        <div className='flex flex-col gap-5'>
            <div className=" w-[124px] h-[29px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">توضیحات دوره</div>

            <div className=" w-[1408px] h-[276px]  font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black border border-gray">{}</div>

            <div className='flex gap-5'>
            <div className=" w-[71px] h-[23px] font-dana font-semibold text-[16px] leading-[100%] tracking-[0%] text-right text-blue-500 whitespace-nowrap">امتیاز بدید</div>
            <div className=" w-[140px] h-[28px] rotate-180">
                <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M126.951 2.92705C126.652 2.00574 125.348 2.00574 125.049 2.92705L123.081 8.98278C122.947 9.3948 122.563 9.67376 122.13 9.67376H115.763C114.794 9.67376 114.391 10.9134 115.175 11.4828L120.326 15.2254C120.677 15.4801 120.824 15.9314 120.69 16.3435L118.722 22.3992C118.423 23.3205 119.477 24.0866 120.261 23.5172L125.412 19.7746C125.763 19.5199 126.237 19.5199 126.588 19.7746L131.739 23.5172C132.523 24.0866 133.577 23.3205 133.278 22.3992L131.31 16.3435C131.176 15.9314 131.323 15.4801 131.674 15.2254L136.825 11.4828C137.609 10.9134 137.206 9.67376 136.237 9.67376H129.87C129.437 9.67376 129.053 9.3948 128.919 8.98278L126.951 2.92705Z" fill="#D9D9D9"/>
                <path d="M98.9511 2.92705C98.6517 2.00574 97.3483 2.00574 97.0489 2.92705L95.0813 8.98278C94.9474 9.3948 94.5635 9.67376 94.1303 9.67376H87.7629C86.7942 9.67376 86.3914 10.9134 87.1751 11.4828L92.3264 15.2254C92.6769 15.4801 92.8236 15.9314 92.6897 16.3435L90.7221 22.3992C90.4227 23.3205 91.4772 24.0866 92.2609 23.5172L97.4122 19.7746C97.7627 19.5199 98.2373 19.5199 98.5878 19.7746L103.739 23.5172C104.523 24.0866 105.577 23.3205 105.278 22.3992L103.31 16.3435C103.176 15.9314 103.323 15.4801 103.674 15.2254L108.825 11.4828C109.609 10.9134 109.206 9.67376 108.237 9.67376H101.87C101.437 9.67376 101.053 9.3948 100.919 8.98278L98.9511 2.92705Z" fill="#D9D9D9"/>
                <path d="M70.9511 2.92705C70.6517 2.00574 69.3483 2.00574 69.0489 2.92705L67.0813 8.98278C66.9474 9.3948 66.5635 9.67376 66.1303 9.67376H59.7629C58.7942 9.67376 58.3914 10.9134 59.1751 11.4828L64.3264 15.2254C64.6769 15.4801 64.8236 15.9314 64.6897 16.3435L62.7221 22.3992C62.4227 23.3205 63.4772 24.0866 64.2609 23.5172L69.4122 19.7746C69.7627 19.5199 70.2373 19.5199 70.5878 19.7746L75.7391 23.5172C76.5228 24.0866 77.5773 23.3205 77.2779 22.3992L75.3103 16.3435C75.1764 15.9314 75.3231 15.4801 75.6736 15.2254L80.8249 11.4828C81.6086 10.9134 81.2058 9.67376 80.2371 9.67376H73.8697C73.4365 9.67376 73.0526 9.3948 72.9187 8.98278L70.9511 2.92705Z" fill="#D9D9D9"/>
                <path d="M42.9511 2.92705C42.6517 2.00574 41.3483 2.00574 41.0489 2.92705L39.0813 8.98278C38.9474 9.3948 38.5635 9.67376 38.1303 9.67376H31.7629C30.7942 9.67376 30.3914 10.9134 31.1751 11.4828L36.3264 15.2254C36.6769 15.4801 36.8236 15.9314 36.6897 16.3435L34.7221 22.3992C34.4227 23.3205 35.4772 24.0866 36.2609 23.5172L41.4122 19.7746C41.7627 19.5199 42.2373 19.5199 42.5878 19.7746L47.7391 23.5172C48.5228 24.0866 49.5773 23.3205 49.2779 22.3992L47.3103 16.3435C47.1764 15.9314 47.3231 15.4801 47.6736 15.2254L52.8249 11.4828C53.6086 10.9134 53.2058 9.67376 52.2371 9.67376H45.8697C45.4365 9.67376 45.0526 9.3948 44.9187 8.98278L42.9511 2.92705Z" fill="#D9D9D9"/>
                <path d="M14.9511 2.92705C14.6517 2.00574 13.3483 2.00574 13.0489 2.92705L11.0813 8.98278C10.9474 9.3948 10.5635 9.67376 10.1303 9.67376H3.76289C2.79417 9.67376 2.39139 10.9134 3.1751 11.4828L8.32642 15.2254C8.6769 15.4801 8.82356 15.9314 8.68969 16.3435L6.72206 22.3992C6.42271 23.3205 7.47719 24.0866 8.26091 23.5172L13.4122 19.7746C13.7627 19.5199 14.2373 19.5199 14.5878 19.7746L19.7391 23.5172C20.5228 24.0866 21.5773 23.3205 21.2779 22.3992L19.3103 16.3435C19.1764 15.9314 19.3231 15.4801 19.6736 15.2254L24.8249 11.4828C25.6086 10.9134 25.2058 9.67376 24.2371 9.67376H17.8697C17.4365 9.67376 17.0526 9.3948 16.9187 8.98278L14.9511 2.92705Z" fill="#D9D9D9"/>
                </svg>
            </div>
            <div className=" w-[216px] h-[39px] rounded-[48px] border gap-[8px] pt-[8px] pr-[24px] pb-[8px] pl-[24px]">
                <svg width="216" height="39" viewBox="0 0 216 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="215" height="38" rx="19" fill="#FCFCFC"/>
                <rect x="0.5" y="0.5" width="215" height="38" rx="19" stroke="#3772FF"/>
                <path d="M28.5729 22.816C28.5089 22.8267 28.4129 22.832 28.2849 22.832C27.7515 22.832 27.2395 22.6453 26.7489 22.272C26.2582 21.888 25.9222 21.4293 25.7409 20.896C25.6449 20.608 25.5969 20.3147 25.5969 20.016C25.5969 19.4187 25.7675 18.8693 26.1089 18.368C26.4609 17.856 26.9195 17.5093 27.4849 17.328L29.7409 16.576V15.904H31.2289V20.656C31.2289 21.1253 31.3995 21.5253 31.7409 21.856C32.0822 22.176 32.4982 22.336 32.9889 22.336H33.2929L33.3889 23.168L33.2929 24H32.9889C32.4342 24 31.9169 23.872 31.4369 23.616C30.9675 23.3493 30.5889 22.992 30.3009 22.544C29.5009 22.6827 28.9249 22.7733 28.5729 22.816ZM27.1329 20.304C27.1969 20.5387 27.3355 20.7467 27.5489 20.928C27.7729 21.0987 28.0129 21.184 28.2689 21.184C28.3542 21.184 28.4182 21.1787 28.4609 21.168L29.7569 20.96C29.7462 20.896 29.7409 20.7947 29.7409 20.656V18.208L27.9489 18.832C27.6715 18.9173 27.4582 19.0667 27.3089 19.28C27.1595 19.4827 27.0849 19.712 27.0849 19.968C27.0849 20.0747 27.1009 20.1867 27.1329 20.304ZM33.1387 22.336H33.3948C34.7601 22.336 36.2001 22.1227 37.7148 21.696L41.2987 20.672L38.1948 19.12C37.9068 18.96 37.6081 18.88 37.2988 18.88C36.9894 18.88 36.6961 18.9653 36.4188 19.136C36.1414 19.3067 35.9174 19.5413 35.7468 19.84L35.4588 20.352L34.1788 19.552L34.4828 18.992C34.8028 18.416 35.2028 17.9787 35.6828 17.68C36.1628 17.3813 36.6854 17.232 37.2508 17.232C37.7948 17.232 38.3494 17.3813 38.9148 17.68L43.0268 19.92L42.8028 21.808L42.3548 21.952C42.5894 22.208 42.8934 22.336 43.2668 22.336H44.2908L44.3868 23.168L44.2908 24H43.2668C42.7441 24 42.2641 23.856 41.8268 23.568C41.4001 23.2693 41.0748 22.8853 40.8508 22.416L38.1308 23.28C36.5841 23.76 35.0001 24 33.3788 24H33.1387V22.336ZM44.1231 22.336H45.0831C45.4565 22.336 45.8565 22.304 46.2831 22.24C45.6751 21.7173 45.3925 21.216 45.4351 20.736L45.5311 19.808C45.5738 19.3067 45.7285 18.8587 45.9951 18.464C46.2618 18.0693 46.6085 17.76 47.0351 17.536C47.4618 17.312 47.9151 17.2 48.3951 17.2C48.9605 17.2 49.4671 17.3547 49.9151 17.664C50.3631 17.9733 50.6991 18.3733 50.9231 18.864C51.1578 19.3547 51.2591 19.8667 51.2271 20.4L51.1791 21.12C51.1471 21.504 50.8911 21.8933 50.4111 22.288C50.6991 22.32 51.0031 22.336 51.3231 22.336H52.4271L52.5231 23.168L52.4271 24H51.3231C50.3525 24 49.3498 23.7973 48.3151 23.392C47.7925 23.584 47.2485 23.7333 46.6831 23.84C46.1178 23.9467 45.5845 24 45.0831 24H44.1231V22.336ZM46.9231 20.8C46.9871 20.9493 47.1311 21.1147 47.3551 21.296C47.5898 21.4667 47.8885 21.632 48.2511 21.792C49.1151 21.504 49.5951 21.2213 49.6911 20.944L49.7551 20.384C49.7871 20.1387 49.7445 19.8987 49.6271 19.664C49.5205 19.4293 49.3551 19.2373 49.1311 19.088C48.9178 18.928 48.6671 18.848 48.3791 18.848C48.0165 18.848 47.6965 18.9653 47.4191 19.2C47.1525 19.424 47.0031 19.7173 46.9711 20.08L46.9231 20.8ZM47.5311 14.208H49.3071V15.968H47.5311V14.208ZM56.0558 24C55.3944 23.9893 54.8664 23.744 54.4718 23.264C53.9278 23.7333 53.2184 23.9787 52.3438 24H52.2637V22.336H52.3438C52.8131 22.336 53.1758 22.2453 53.4318 22.064C53.6984 21.872 53.8531 21.5627 53.8958 21.136L54.0718 19.168L55.5438 19.312L55.3678 21.264V21.28C55.3358 21.632 55.3838 21.8987 55.5118 22.08C55.6398 22.2507 55.8371 22.336 56.1038 22.336L57.2078 20.832C57.7518 20.064 58.1998 19.4773 58.5518 19.072C58.9038 18.656 59.2824 18.3307 59.6878 18.096C60.0931 17.8613 60.5464 17.744 61.0478 17.744C61.6131 17.744 62.1251 17.888 62.5838 18.176C63.0531 18.464 63.4158 18.8587 63.6718 19.36C63.9384 19.8507 64.0718 20.3947 64.0718 20.992C64.0718 21.5253 63.9331 22.0213 63.6558 22.48C63.3784 22.9387 63.0051 23.3067 62.5358 23.584C62.0771 23.8613 61.5811 24 61.0478 24H56.0558ZM61.0478 22.336C61.4744 22.336 61.8371 22.1973 62.1358 21.92C62.4344 21.6427 62.5838 21.312 62.5838 20.928C62.5838 20.5013 62.4398 20.144 62.1518 19.856C61.8744 19.5573 61.5171 19.408 61.0798 19.408C60.7811 19.408 60.5038 19.488 60.2478 19.648C59.9918 19.808 59.7304 20.048 59.4638 20.368C59.1971 20.6773 58.8504 21.1413 58.4238 21.76L58.0078 22.336H61.0478ZM76.1889 24C74.9835 24 74.0715 23.9893 73.4529 23.968C72.8449 23.936 72.3809 23.8933 72.0609 23.84C71.7515 23.776 71.4529 23.6853 71.1649 23.568C70.6635 23.344 70.2795 23.0187 70.0129 22.592C69.7462 22.1653 69.6129 21.6693 69.6129 21.104C69.6129 20.7627 69.6609 20.4 69.7569 20.016L70.3489 17.728L71.7729 18.144L71.1649 20.496C71.1115 20.6773 71.0849 20.8747 71.0849 21.088C71.0849 21.3227 71.1382 21.5147 71.2449 21.664C71.3515 21.8133 71.5222 21.9413 71.7569 22.048C72.0129 22.1547 72.4075 22.2293 72.9409 22.272C73.4849 22.3147 74.5995 22.336 76.2849 22.336H79.5649C79.8102 22.336 80.0022 22.2827 80.1409 22.176C80.3755 22.016 80.4929 21.7867 80.4929 21.488C80.4929 21.3067 80.4395 21.1307 80.3329 20.96L76.7969 15.936L77.1169 14.688L82.9089 12.56L83.4209 14.112L78.6529 15.856L81.4529 19.968L81.5649 20.144C82.0982 20.9973 82.5515 21.5787 82.9249 21.888C83.3089 22.1867 83.7462 22.336 84.2369 22.336H84.4609L84.5569 23.168L84.4609 24H84.2369C83.7675 24 83.3302 23.8987 82.9249 23.696C82.5195 23.4827 82.1302 23.168 81.7569 22.752C81.6929 22.8907 81.5809 23.0507 81.4209 23.232C80.9942 23.744 80.3702 24 79.5489 24H76.2849H76.1889ZM84.295 22.336H85.303C85.7937 22.336 86.1403 22.256 86.343 22.096C86.5457 21.9253 86.6363 21.664 86.615 21.312V21.28L86.439 19.312L87.911 19.168L88.087 21.136V21.152C88.1297 21.6 88.2417 21.9093 88.423 22.08C88.6043 22.2507 88.9297 22.336 89.399 22.336L89.495 23.168L89.399 24C88.5243 24 87.8523 23.76 87.383 23.28C86.8817 23.76 86.1883 24 85.303 24H84.295V22.336ZM85.575 15.76H87.351V17.536H85.575V15.76ZM89.2325 22.336H91.8085C92.2992 22.336 92.6458 22.2507 92.8485 22.08C93.0512 21.9093 93.1365 21.6427 93.1045 21.28L92.9285 19.312L94.4165 19.168L94.5925 21.136V21.152C94.6352 21.6 94.7472 21.9093 94.9285 22.08C95.1205 22.2507 95.4458 22.336 95.9045 22.336L95.9845 23.168L95.9045 24C95.0192 24 94.3472 23.7547 93.8885 23.264C93.3658 23.7547 92.6725 24 91.8085 24H89.2325V22.336ZM88.4485 25.552H90.0165V27.136H88.4485V25.552ZM91.4405 25.552H93.0085V27.136H91.4405V25.552ZM95.7481 22.336H96.1161C97.0121 22.336 97.4495 21.9627 97.4281 21.216L97.1241 13.312L98.5961 13.232L98.9001 21.152C98.9215 21.6427 98.8308 22.1067 98.6281 22.544C98.4361 22.9813 98.1268 23.3333 97.7001 23.6C97.2735 23.8667 96.7455 24 96.1161 24H95.7481V22.336ZM109.881 27.776C109.358 27.8933 108.884 27.952 108.457 27.952C107.625 27.952 106.905 27.7653 106.297 27.392C105.689 27.0187 105.225 26.4907 104.905 25.808C104.585 25.1253 104.425 24.3307 104.425 23.424C104.425 22.4 104.628 21.312 105.033 20.16L106.441 20.72C106.078 21.744 105.897 22.6613 105.897 23.472C105.897 24.368 106.116 25.0613 106.553 25.552C107.001 26.0427 107.636 26.288 108.457 26.288C108.83 26.288 109.193 26.2453 109.545 26.16C110.292 25.9893 110.841 25.84 111.193 25.712C111.556 25.584 111.838 25.4027 112.041 25.168C112.254 24.9333 112.361 24.5973 112.361 24.16C112.361 24.0747 112.35 23.9253 112.329 23.712L111.689 19.328L113.145 19.088L113.801 23.472C113.844 23.8347 113.865 24.0907 113.865 24.24C113.865 24.9547 113.7 25.5413 113.369 26C113.049 26.4587 112.601 26.8213 112.025 27.088C111.46 27.3547 110.745 27.584 109.881 27.776ZM108.073 18.288H109.849V20.064H108.073V18.288ZM118.432 24C117.622 24 116.971 23.824 116.48 23.472C116 23.12 115.739 22.6667 115.696 22.112C115.654 21.9093 115.632 21.5627 115.632 21.072H117.008C117.008 21.3813 117.024 21.632 117.056 21.824C117.099 22.016 117.206 22.1493 117.376 22.224C117.547 22.2987 117.814 22.336 118.176 22.336H119.504C120.454 22.336 120.928 22.048 120.928 21.472C120.928 21.408 120.907 21.28 120.864 21.088C120.683 20.544 120.358 19.872 119.888 19.072C119.43 18.272 118.923 17.4773 118.368 16.688L119.568 15.712C120.198 16.5867 120.768 17.4773 121.28 18.384C121.803 19.2907 122.144 20.0693 122.304 20.72C122.368 20.9867 122.4 21.2533 122.4 21.52C122.4 22.256 122.139 22.8533 121.616 23.312C121.094 23.7707 120.326 24 119.312 24H118.432ZM127.344 24C127.077 24 126.859 23.9787 126.688 23.936C126.709 24.1707 126.72 24.336 126.72 24.432C126.72 25.392 126.421 26.128 125.824 26.64C125.227 27.152 124.341 27.568 123.168 27.888L122.384 28.096L122 26.496L122.784 26.288C123.371 26.128 123.824 25.9787 124.144 25.84C124.475 25.7013 124.736 25.5093 124.928 25.264C125.131 25.0293 125.232 24.7147 125.232 24.32C125.232 24.2453 125.221 24.112 125.2 23.92L124.56 19.312L126.032 19.088L126.16 20.064C126.267 20.64 126.325 20.9867 126.336 21.104C126.421 21.6053 126.528 21.936 126.656 22.096C126.795 22.256 127.024 22.336 127.344 22.336H127.456L127.552 23.168L127.456 24H127.344ZM127.342 22.336H130.718C130.963 22.336 131.155 22.2827 131.294 22.176C131.529 22.0053 131.646 21.776 131.646 21.488C131.646 21.3067 131.593 21.1307 131.486 20.96L127.934 15.936L128.27 14.688L134.046 12.56L134.574 14.112L129.79 15.856L132.606 19.968C132.979 20.5547 133.166 21.1307 133.166 21.696C133.166 22.2933 132.963 22.8053 132.558 23.232C132.131 23.744 131.513 24 130.702 24H127.342V22.336ZM145.147 27.776C144.624 27.8933 144.149 27.952 143.723 27.952C142.891 27.952 142.171 27.7653 141.563 27.392C140.955 27.0187 140.491 26.4907 140.171 25.808C139.851 25.1253 139.691 24.3307 139.691 23.424C139.691 22.4 139.893 21.312 140.299 20.16L141.707 20.72C141.355 21.712 141.179 22.624 141.179 23.456C141.179 24.352 141.397 25.0453 141.835 25.536C142.283 26.0373 142.912 26.288 143.723 26.288C144.096 26.288 144.459 26.2453 144.811 26.16C145.504 26 146.032 25.856 146.395 25.728C146.757 25.6107 147.04 25.456 147.243 25.264C147.445 25.072 147.547 24.8213 147.547 24.512C147.547 24.448 147.536 24.3413 147.515 24.192C147.461 23.9147 147.008 23.6107 146.155 23.28L145.019 22.912L145.483 21.344C145.568 21.3653 145.755 21.4187 146.043 21.504C147.184 21.8347 148.005 22.0587 148.507 22.176C149.019 22.2827 149.52 22.336 150.011 22.336L150.107 23.168L150.011 24C149.637 24 149.28 23.984 148.939 23.952C148.971 24.016 148.987 24.08 148.987 24.144C149.008 24.3573 149.019 24.5067 149.019 24.592C149.019 25.4453 148.693 26.112 148.043 26.592C147.392 27.0827 146.427 27.4773 145.147 27.776ZM149.857 22.336H152.434C152.924 22.336 153.271 22.2507 153.474 22.08C153.676 21.9093 153.762 21.6427 153.73 21.28L153.554 19.312L155.042 19.168L155.218 21.136V21.152C155.26 21.6 155.372 21.9093 155.554 22.08C155.746 22.2507 156.071 22.336 156.53 22.336L156.61 23.168L156.53 24C155.644 24 154.972 23.7547 154.514 23.264C153.991 23.7547 153.298 24 152.434 24H149.857V22.336ZM151.938 25.424V27.104H150.258L150.242 25.424H151.938ZM151.842 27.808H153.362V29.248H151.842V27.808ZM154.93 25.424L154.914 27.104H153.25L153.234 25.424H154.93ZM156.373 22.336H159.749C159.994 22.336 160.186 22.2827 160.325 22.176C160.56 22.0053 160.677 21.776 160.677 21.488C160.677 21.3067 160.624 21.1307 160.517 20.96L156.965 15.936L157.301 14.688L163.077 12.56L163.605 14.112L158.821 15.856L161.637 19.968C162.01 20.5547 162.197 21.1307 162.197 21.696C162.197 22.2933 161.994 22.8053 161.589 23.232C161.162 23.744 160.544 24 159.733 24H156.373V22.336Z" fill="#3772FF"/>
                <path d="M176.853 19.5L175.566 18.2132C174.145 16.7919 174.145 14.4874 175.566 13.066C176.987 11.6447 179.292 11.6447 180.713 13.066L188.434 20.7868C189.855 22.2082 189.855 24.5127 188.434 25.934C187.013 27.3553 184.708 27.3553 183.287 25.934L180.392 23.0387C179.503 22.1503 179.503 20.7101 180.392 19.8217C181.28 18.9333 182.72 18.9333 183.609 19.8217L185.217 21.4302" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            </div>
        </div>
    </section>
    
  )
}

export{ DetailCourse }
