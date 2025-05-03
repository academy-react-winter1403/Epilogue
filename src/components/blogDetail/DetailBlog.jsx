import React from 'react'
import { DetailBlogBox } from './DetailBlogBox'
import { StarRating } from '../common/starRating/StarRating'

const DetailBlog = ({newsId, blog}) => {
   
  return (
    <section className="w-full flex flex-col gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 justify-center items-center bg-bg-primary">

        <div className='w-[110%] flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center gap-4'>
            <div className="mr-[-30px] w-[361px] md:w-[50%] lg:w-[50%] h-[424px] md:h-[400px] lg:h-[424px] order-2 md:order-2 lg:order-0">
                {blog?.detailsNewsDto?.addUserProfileImage ? (
                    <img src={blog?.detailsNewsDto?.addUserProfileImage} alt="عکس دوره" className="w-full h-full object-cover rounded-[20px]"/>
                ):(
                    <div className='w-full h-full rounded-[20px] flex justify-center items-center bg-gray-200'>
                        <span className="text-gray-500">تصویری موجود نیست</span>
                    </div>
                )}
            </div>

            <DetailBlogBox newsId={newsId} blog={blog} />
        </div>
       
        <div className='w-full mr-50 md:mr-[-40px] md:self-start flex flex-col gap-4 lg:gap-6 justify-center items-start'>
            <h2 className="w-[124px] h-[29px] font-dana font-bold text-xl lg:text-2xl leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap"> </h2>

            <div className="w-[50%] md:w-full lg:w-full font-dana font-medium lg:text-lg   font-medium text-base leading-none tracking-normal text-righ">{blog?.detailsNewsDto?.describe}</div>

            <div className='flex flex-col mt-10 md:flex-row lg:flex-row gap-5'>
                <div className='flex gap-5 items-center'>
                    <div className="w-[71px] h-[23px] font-dana font-semibold text-[16px] leading-[100%] tracking-[0%] text-right text-blue-500 whitespace-nowrap">امتیاز بدید</div>
                    <div className=" w-[140px] h-[28px] rotate-180">
                    <StarRating 
                        itemId={newsId}
                        RateNumber={blog?.detailsNewsDto?.RateNumber}
                        type="blog" 
                        size="md" 
                    />
                    </div>
                </div>
            </div>
        </div>
    </section> 
  )
}

export { DetailBlog }
