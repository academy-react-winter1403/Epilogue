import { useQuery } from '@tanstack/react-query';
import { getAllCourseByPagination } from '../../services/api/courseDetail/getAllCourseByPagination';

export const useRelatedCourses = (CourseId) => {
      const query = useQuery({
        queryKey: ['relatedCourses', CourseId],
        queryFn: () => getAllCourseByPagination(),
      });
  return query
}


