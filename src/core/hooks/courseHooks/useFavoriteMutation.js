import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { postAddCourseFavorite, deleteCourseFavorite } from '../../services/api/courseDetail/postAddCourseFavorite'
import { checkAuth } from '../../services/interceptor';


export const useFavoriteMutation = (CourseId, isFav, userFavoriteId) => {
  const queryClient = useQueryClient();

  const query = useMutation({
      mutationFn: async () => {

        checkAuth()
        
        if (isFav) {
          return await deleteCourseFavorite(userFavoriteId);
        } else {
          return await postAddCourseFavorite(CourseId);
        }
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(['courseDetails', CourseId]);
        toast.success('با موفقیت انجام شد');
      },
      onError: (error) => {
        if (error.message === 'USER_NOT_LOGGED_IN') {
          toast.error('لطفاً ابتدا وارد حساب کاربری خود شوید');
        } else {
          toast.error('خطا در انجام عملیات');
        }
        console.error('Error:', error);
      }
    });
    
    return query;
}