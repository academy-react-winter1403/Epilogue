import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { postAddBlogFavorite, deleteBlogFavorite } from '../../services/api/blogDetail/favoriteBlog';

export const useFavoriteMutation = (blogId, isFav) => {
    const queryClient = useQueryClient();
    const query = useMutation({
        mutationFn: async () => {
          if (isFav) {
            return await deleteBlogFavorite(blogId);
          } else {
            return await postAddBlogFavorite(blogId);
          }
        },
        onSuccess: (data) => {
          queryClient.invalidateQueries(['blogDetails-fav', blogId]);
          toast.success('با موفقیت انجام شد!');
        },
        onError: (error) => {
          toast.error('خطا در انجام عملیات');
          console.error('Error:', error);
        }
      });
  return query
}
