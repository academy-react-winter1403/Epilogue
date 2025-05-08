import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAddCourseReserve } from '../../services/api/courseDetail/PostAddCourseReserve';
import toast from 'react-hot-toast';
import { checkAuth } from '../../services/interceptor';
import { deleteCourseReserve } from '../../services/api/Dashboard/dashborad';

export const useReserveCourse = (CourseId) => {
    const queryClient = useQueryClient();
  
    const reserveMutation = useMutation({
      mutationFn: async ({ isReserved, reserveId }) => {
        checkAuth();
        
        if (isReserved) {
          return await deleteCourseReserve({ id: reserveId });
        } else {
          return await postAddCourseReserve(CourseId);
        }
      },
      onSuccess: (data, variables) => {
        if (data) {
          queryClient.invalidateQueries(['courseDetails', CourseId]);
          toast.success(
            variables.isReserved
              ? 'دوره با موفقیت از لیست رزروهای شما حذف شد'
              : 'دوره با موفقیت به لیست رزروهای شما اضافه شد'
          );
        }
      },
      onError: (error) => {
        if (error.message === 'USER_NOT_LOGGED_IN') {
          toast.error('لطفاً ابتدا وارد حساب کاربری خود شوید');
        } else if (error.response?.status === 401) {
          toast.error('احراز هویت ناموفق بود. لطفاً مجدداً وارد شوید');
        } else if (error.response?.status === 422) {
         
          const errorMessages = error.response.data?.ErrorMessage || [];
          errorMessages.forEach(msg => toast.error(msg));
        } else {
          toast.error('خطا در انجام عملیات رزرو');
        }
        console.error('Error in course reservation:', error);
      }
    });
  
    return reserveMutation;
};