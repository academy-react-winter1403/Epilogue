import {postAddLikeCourse, postAddDislikeCourse, deleteLikeCourse} from '../../services/api/courseDetail/postAddLikeDislikeCourse.js'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast';
import { getItem } from '../../utils/storage.services.js';

export const useLikeCourse = (courseId) => {
  const queryClient = useQueryClient();
  
  const likeMutation = useMutation({
    mutationFn: async () => {
      if (!localStorage.getItem('token')) {
        throw new Error('USER_NOT_LOGGED_IN');
      }
      return await postAddLikeCourse(courseId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['courseDetails', courseId]);
    },
    onError: (error) => {
      if (error.message === 'USER_NOT_LOGGED_IN') {
        toast.error('لطفاً ابتدا وارد حساب کاربری خود شوید');
        return;
      }
      
      if (error.response?.status === 401) {
        toast.error('احراز هویت ناموفق بود. لطفاً مجدداً وارد شوید');
      } else {
        toast.error('خطا در ثبت پسندیدن دوره');
      }
      console.error('Error in course like:', error);
    }
  });

  return likeMutation;
};

export const useDisLikeCourse = (courseId) => {
  const queryClient = useQueryClient();

  const dislikeMutation = useMutation({
    mutationFn: async () => {
      if (!localStorage.getItem('token')) {
        toast.error('لطفاً ابتدا وارد حساب کاربری خود شوید');
        throw new Error('USER_NOT_LOGGED_IN');
      }
      return await postAddDislikeCourse(courseId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['courseDetails', courseId]);
    },
    onError: (error) => {
      if (error.message !== 'USER_NOT_LOGGED_IN') {
        if (error.response?.status === 401) {
          toast.error('احراز هویت ناموفق بود. لطفاً مجدداً وارد شوید');
        } else {
          toast.error('خطا در ثبت نپسندیدن دوره');
        }
      }
    }
  });

  return dislikeMutation;
};

export const useDeleteLikeCourse = () => {
  const queryClient = useQueryClient();

  const deleteikeMutation  = useMutation({
      mutationFn: (userLikeId) => deleteLikeCourse(userLikeId),
      onSuccess: () => {
        queryClient.invalidateQueries(['courseDetails-delete']);
      },
      onError: (error) => {
        console.error('Error in dislike:', error);
      }
    })
    
return deleteikeMutation
}


