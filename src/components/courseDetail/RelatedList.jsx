import React from 'react';
import { Link } from 'react-router-dom';
import { useRelatedCourses } from '../../core/hooks/courseHooks/useRelatedCourses';
const RelatedCourses = ({ CourseId }) => {
  const { data: coursesData, isLoading, isError } = useRelatedCourses(CourseId);

  if (isLoading) return <div className="text-center py-4">در حال بارگذاری دوره‌های مرتبط...</div>;
  if (isError) return <div className="text-center py-4 text-red-500">خطا در دریافت دوره‌های مرتبط</div>;
  if (!coursesData || coursesData.length === 0) return null;

  return (
    <section className="w-full py-6">
      <div className="mr-2 mb-5 w-full lg:w-[125px] h-[29px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">
        دوره های مرتبط
      </div>
      <div className="w-full h-auto md:h-[366px] flex gap-3 pb-4">
        {coursesData.map((course) => (
          <div 
            key={course.id}
            className="min-w-[300px] h-[366px] bg-white flex flex-col gap-[10px]"
          >
            <Link to={`/course-detail/${course.id}`}>
                <div className='relative'> 
                  <div className='absolute top-2 right-5 w-[65px] h-[24px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-[#FF37F5] text-white whitespace-nowrap'>{course?.courseLevelName}</div>
                  <div className='w-[52px] h-[24px] absolute top-2 right-23 rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-[#3772FF]'></div>
                {course.image ? (
                  <img 
                    src={course?.image}
                    alt={course?.title}
                    className="w-full h-[293px] rounded-[24px] object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-[293px] rounded-[24px] flex items-center justify-center bg-gray-200 text-gray-500">
                    تصویر دوره
                  </div>
                )}
                </div>
                <div className='font-DanaFaNum font-bold text-2xl leading-none tracking-normal text-right p-2'>
                <h3>
                {course?.title}
                </h3>
                </div>
                <div className='flex items-center justify-between p-2'>
                    <p className="text-sm text-gray-500 ">{course?.teacherName}</p>
                    <span className="text-gray-900 font-dana-bold">
                        {course.price.toLocaleString()} تومان
                    </span>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export { RelatedCourses };

