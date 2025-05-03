import { DetailBox } from './DetailBox'
import { CopyUrlButton } from '../common/copyUrl/CopyUrlButton'
import { StarRating } from '../common/starRating/StarRating.jsx'
import { div } from 'framer-motion/client'

const DetailCourse = ({course, CourseId}) => {

  return (
    <section className="w-full flex flex-col gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 justify-center items-center">

        <div className='w-[110%] flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between items-center mb-6'>
            
            <div className="w-[361px] md:w-[50%] lg:w-[50%] h-[424px] md:h-[400px] lg:h-[424px] order-2 md:order-2 lg:order-0">
                {course?.imageAddress ? (
                    <img src={course?.imageAddress} alt="عکس دوره" className="w-full h-full object-cover rounded-[20px]"/>
                ):(
                    <div className='w-full h-full rounded-[20px] flex justify-center items-center bg-gray-200'>
                        <span className="text-gray-500">تصویری موجود نیست</span>
                    </div>
                )}
            </div>

        <DetailBox course={course} CourseId={CourseId}/>
        </div>

        <div className='mr-[-40px] md:self-start flex flex-col gap-4 lg:gap-6  justify-center items-start'>
            <h2 className="w-[124px] h-[29px] font-dana font-bold text-xl lg:text-2xl leading-[100%] tracking-[0%] text-right text-[var(--text-grey)] whitespace-nowrap">توضیحات دوره</h2>

            <div className="w-[50%] md:w-full lg:w-full font-dana font-medium text-base lg:text-lg leading-[100%] tracking-[0%] text-right text-black">{course?.describe}</div>

            <div className='flex flex-col mt-10 md:flex-row lg:flex-row gap-5'>
                <div className='flex gap-5 items-center'>
                    <div className="w-[71px] h-[23px] font-dana font-semibold text-[16px] leading-[100%] tracking-[0%] text-right text-blue-500 whitespace-nowrap">امتیاز بدید</div>
                    <div className=" w-[140px] h-[28px] rotate-180">
                    <StarRating 
                        RateNumber={course?.currentUserRateNumber}
                        itemId={CourseId}
                        userId={course?.isCourseUser}
                        type="course" 
                        size="md" 
                    />
                    </div>
                </div>
            <div >
                <CopyUrlButton/>
            </div>
            </div>
        </div>
    </section> 
  )
}

export{ DetailCourse }
