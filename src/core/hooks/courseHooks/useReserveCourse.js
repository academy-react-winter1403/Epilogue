import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAddCourseReserve } from '../../services/api/courseDetail/PostAddCourseReserve';
import toast from 'react-hot-toast';
import { deleteCourseReserve } from '../../services/api/courseDetail/deleteCourseReserve';
import { getItem } from '../../utils/storage.services';

export const useReserveCourse = (courseId) => {
  const queryClient = useQueryClient();

  const reserveMutation = useMutation({
    mutationFn: async ({ isReserved, reserveId }) => {
      if (!localStorage.getItem('token')) {
        toast.error('لطفاً ابتدا وارد حساب کاربری خود شوید');
        throw new Error('USER_NOT_LOGGED_IN');
      }
      
      const reserved = typeof isReserved === 'string' 
        ? isReserved === "1" 
        : isReserved;
      
      return reserved 
        ? await deleteCourseReserve({ id: reserveId })
        : await postAddCourseReserve(courseId);
    },
    onSuccess: (data, { isReserved }) => {
      queryClient.invalidateQueries(['courseDetails', courseId]);
      toast.success(
        isReserved 
          ? 'دوره با موفقیت از لیست رزروهای شما حذف شد'
          : 'دوره با موفقیت به لیست رزروهای شما اضافه شد'
      );
    },
    onError: (error) => {
      if (error.message === 'USER_NOT_LOGGED_IN') return;
      
      if (error.response?.status === 401) {
        toast.error('احراز هویت ناموفق بود. لطفاً مجدداً وارد شوید');
      } else if (error.response?.status === 422) {
        const errorMessages = error.response.data?.ErrorMessage || [];
        errorMessages.forEach(msg => toast.error(msg));
      } else {
        toast.error('خطا در انجام عملیات رزرو');
      }
    }
  });

  return reserveMutation;
};