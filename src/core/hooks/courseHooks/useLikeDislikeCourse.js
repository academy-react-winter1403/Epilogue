import {postAddLikeCourse, postAddDislikeCourse, deleteLikeCourse} from '../../services/api/courseDetail/postAddLikeDislikeCourse.js'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import toast from 'react-hot-toast';
import { checkAuth } from '../../services/interceptor/index.js';

export const useLikeCourse = (CourseId) => {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: async () => {
      checkAuth();
      return await postAddLikeCourse(CourseId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['courseDetails', CourseId]);
    },
    onError: (error) => {
      if (error.message === 'USER_NOT_LOGGED_IN') {
        toast.error('لطفاً ابتدا وارد حساب کاربری خود شوید');
      } else if (error.response?.status === 401) {
        toast.error('احراز هویت ناموفق بود. لطفاً مجدداً وارد شوید');
      } else {
        toast.error('خطا در ثبت پسندیدن دوره');
      }
      console.error('Error in course like:', error);
    }
  });

  return likeMutation;
}

export const useDisLikeCourse = (CourseId) => {
  const queryClient = useQueryClient();

  const dislikeMutation = useMutation({
    mutationFn: async () => {
      checkAuth();
      return await postAddDislikeCourse(CourseId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['courseDetails', CourseId]);
    },
    onError: (error) => {
      if (error.message === 'USER_NOT_LOGGED_IN') {
        toast.error('لطفاً ابتدا وارد حساب کاربری خود شوید');
      } else if (error.response?.status === 401) {
        toast.error('احراز هویت ناموفق بود. لطفاً مجدداً وارد شوید');
      } else {
        toast.error('خطا در ثبت نپسندیدن دوره');
      }
      console.error('Error in course dislike:', error);
    }
  });

  return dislikeMutation;
}

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


