import React from 'react';
import { Link } from 'react-router-dom';
import { useRelatedCourses } from '../../core/hooks/courseHooks/useRelatedCourses';

const RelatedCourses = ({ CourseId }) => {
  const { data, isLoading, isError } = useRelatedCourses(CourseId);

  if (isLoading) return <div className="text-center py-4">در حال بارگذاری دوره‌های مرتبط...</div>;
  if (isError) return <div className="text-center py-4 text-red-500">خطا در دریافت دوره‌های مرتبط</div>;
  if (!data?.courseFilterDtos || data.courseFilterDtos.length === 0) return null;

  const courses = data.courseFilterDtos.filter(course => course.courseId !== CourseId).slice(0, 4);

  return (
    <section className="w-auto py-6">
      <div className="mr-2 mb-5 w-full lg:w-[125px] h-[29px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">
        دوره های مرتبط
      </div>
      <div className="sm:overflow-x-auto sm:overflow-y-hidden md:w-auto w-[400px] h-auto md:h-[366px] flex gap-2 mb-4  sm:scrollbar sm:scrollbar-track-white sm:scrollbar-thumb-blue-500">
        {courses.map((course) => (
<<<<<<< HEAD
          <div key={course.courseId} className="min-w-[324px] h-[366px] bg-white flex flex-col gap-[10px]">
=======
          <div key={course.courseId} className="min-w-[310px] h-[366px] bg-white flex flex-col gap-[10px]">
>>>>>>> 4a6c1baaa12ca325e693d7f1beac4fb1a8bc56d0
            <Link to={`/course-details/${course.courseId}`}>
              <div className='relative'>
                <div className='absolute top-2 right-5 w-[65px] h-[24px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-[#FF37F5] text-white whitespace-nowrap'>
                  {course.courseLevelName}
                </div>
                <div className='w-[52px] h-[24px] absolute top-2 right-23 rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-[#3772FF]'></div>
                {course.tumbImageAddress ? (
                  <img 
                    src={course.tumbImageAddress}
                    alt={course.title}
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
                <h3>{course.title}</h3>
              </div>
              <div className='flex items-center justify-between p-2'>
                <p className="text-sm text-gray-500">{course.teacherName}</p>
                <span className="text-gray-900 font-dana-bold">
                  {course.cost.toLocaleString()} تومان
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