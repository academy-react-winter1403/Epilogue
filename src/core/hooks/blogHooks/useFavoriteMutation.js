import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { postAddBlogFavorite, deleteBlogFavorite } from '../../services/api/blogDetail/favoriteBlog';

export const useFavoriteMutation = (newsId, isFav) => {
    const queryClient = useQueryClient();
    const query = useMutation({
        mutationFn: async () => {
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
          toast.error('خطا در انجام عملیات');
          console.error('Error:', error);
        }
      });
  return query
}
