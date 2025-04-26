import { DetailCourse } from './DetailCourse.jsx'
import { RelatedCourses } from './RelatedList.jsx'
import { useCourseDetails } from '../../core/hooks/courseHooks/useCourseDetails.js'
import { CommentCourse } from './commentCourse/CommentCourse.jsx'

const DetailPage = () => {
  const {  data: course, isLoading,  error } = useCourseDetails();
  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا در دریافت اطلاعات دوره : خطا :{error.message}</div>;
  
  return (
    <div className='w-auto bg-white'>
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">

            {/* detail */}
            <DetailCourse CourseId={course.courseId} course={course}/>
          
            {/* comments */}
            <CommentCourse CourseId={course.courseId} course={course}/>

            {/* related-courses */}
            <RelatedCourses CourseId={course.courseId} course={course}/>
        </div>
    </div>
  )
}

export { DetailPage }
