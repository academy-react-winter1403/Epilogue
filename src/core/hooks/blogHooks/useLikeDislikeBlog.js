import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletelikeBlog, postLikeBlog, postDislikeBlog } from '../../services/api/blogDetail/likeDislikeBlog.js';
import toast from 'react-hot-toast';
import { getItem } from '../../utils/storage.services.js';

export const useLikeBlog = (newsId) => {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: async () => {
      if (!localStorage.getItem('token')) {
        throw new Error('USER_NOT_LOGGED_IN');
      }
      return await postLikeBlog(newsId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['blogDetails-like', newsId]);
    },
    onError: (error) => {
      if (error.message === 'USER_NOT_LOGGED_IN') {
        toast.error('لطفاً ابتدا وارد حساب کاربری خود شوید');
      } else if (error.response?.status === 401) {
        toast.error('احراز هویت ناموفق بود. لطفاً مجدداً وارد شوید');
      } else {
        toast.error('خطا در ثبت پسندیدن');
      }
      console.error('Error in like:', error);
    }
  });

  return likeMutation;
}

export const useDisLikeBlog = (newsId) => {
  const queryClient = useQueryClient();

  const dislikeMutation = useMutation({
    mutationFn: async () => {
      if (!localStorage.getItem('token')) {
        throw new Error('USER_NOT_LOGGED_IN');
      }
      return await postDislikeBlog(newsId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['blogDetails-dislike', newsId]);
    },
    onError: (error) => {
      if (error.message === 'USER_NOT_LOGGED_IN') {
        toast.error('لطفاً ابتدا وارد حساب کاربری خود شوید');
      } else if (error.response?.status === 401) {
        toast.error('احراز هویت ناموفق بود. لطفاً مجدداً وارد شوید');
      } else {
        toast.error('خطا در ثبت نپسندیدن');
      }
      console.error('Error in dislike:', error);
    }
  });

  return dislikeMutation;
}

export const useDelLikeBlog = () => {
  const queryClient = useQueryClient();

  const deletelikeMutation  = useMutation({
      mutationFn: (likeId) => deletelikeBlog(likeId),
      onSuccess: () => {
        queryClient.invalidateQueries(['blogDetails']);
      },
      onError: (error) => {
        console.error('Error in dislike:', error);
      }
    })
    
      
return deletelikeMutation
}