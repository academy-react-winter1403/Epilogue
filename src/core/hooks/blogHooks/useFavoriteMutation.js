import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { postAddBlogFavorite, deleteBlogFavorite } from '../../services/api/blogDetail/favoriteBlog';
import { getItem } from '../../utils/storage.services';

export const useFavoriteMutation = (newsId, isFav) => {
  const queryClient = useQueryClient();

  const favoriteMutation = useMutation({
    mutationFn: async () => {
    
      return isFav 
        ? await deleteBlogFavorite(newsId) 
        : await postAddBlogFavorite(newsId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['blogDetails', newsId]);
      queryClient.invalidateQueries(['blogDetails-fav', newsId]);
      toast.success(isFav ? 'مقاله از علاقه‌مندی‌ها حذف شد' : 'مقاله به علاقه‌مندی‌ها اضافه شد');
    },
    onError: (error) => {
      if (error.message === 'USER_NOT_LOGGED_IN') {
        toast.error('برای این عمل باید وارد حساب کاربری خود شوید');
        return;
      }
      
      if (error.response?.status === 401) {
        toast.error('لطفاً مجدداً وارد حساب کاربری خود شوید');
      } else {
        toast.error(isFav ? 'خطا در حذف از علاقه‌مندی‌ها' : 'خطا در افزودن به علاقه‌مندی‌ها');
      }
    }
  });

  return favoriteMutation;
};