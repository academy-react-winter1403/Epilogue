import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { postAddBlogFavorite, deleteBlogFavorite } from '../../services/api/blogDetail/favoriteBlog';

export const useFavoriteMutation = (newsId, isFav) => {
  const queryClient = useQueryClient();

  const query = useMutation({
      mutationFn: async () => {
        
          const token = localStorage.getItem('token');
          
          if (!token) {
              throw new Error('USER_NOT_LOGGED_IN');
          }

          if (isFav) {
              return await deleteBlogFavorite(newsId);
          } else {
              return await postAddBlogFavorite(newsId);
          }
      },
      onSuccess: (data) => {
          queryClient.invalidateQueries(['blogDetails-fav', newsId]);
          toast.success('با موفقیت انجام شد!');
      },
      onError: (error) => {
          if (error.message === 'USER_NOT_LOGGED_IN') {
              toast.error('لطفاً ابتدا وارد حساب کاربری خود شوید');
          } else if (error.response?.status === 401) {
              toast.error('احراز هویت ناموفق بود. لطفاً مجدداً وارد شوید');
          } else {
              toast.error('خطا در انجام عملیات');
          }
          console.error('Error:', error);
      }
  });

  return query;
}