import React from 'react'
import { DetailCourse } from './DetailCourse.jsx'
import { CommentSection } from '../comment/CommentSection.jsx'

const DetailPage = () => {
  return (
    <div className='w-auto bg-white'>
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">

            {/* detail */}
            <DetailCourse/>
              

            {/* comments */}
            <CommentSection/>

            {/* courses */}
            <section className="border border-red-500 min-h-[500px] w-full py-6">
            <div className="w-full lg:w-[125px] h-[29px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">دوره های مرتبط </div>
            <div className="w-full h-auto md:h-[366px] flex flex-col lg:flex-row gap-6 overflow-x-auto pb-4 lg:overflow-visible border border-gray-400">
            </div>
            </section>  
        </div>
    </div>
  )
}

export { DetailPage }
