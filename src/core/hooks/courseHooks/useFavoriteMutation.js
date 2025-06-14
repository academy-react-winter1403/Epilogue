import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { postAddCourseFavorite, deleteCourseFavorite } from '../../services/api/courseDetail/postAddCourseFavorite'

export const useFavoriteMutation = (CourseId, isFav, userFavoriteId) => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: async () => {
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

        toast.error('خطا در انجام عملیات');
      }

  });
    
  return query;
}