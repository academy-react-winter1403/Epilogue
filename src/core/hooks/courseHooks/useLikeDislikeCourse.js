import {postAddLikeCourse} from '../../services/api/courseDetail/postAddLikeDislikeCourse.js'
import {postAddDislikeCourse , deleteLikeCourse} from '../../services/api/courseDetail/postAddLikeDislikeCourse.js'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useLikeCourse = (CourseId) => {
    const queryClient = useQueryClient();

     const likeMutation  = useMutation({
        mutationFn: () => postAddLikeCourse(CourseId),
        onSuccess: () => {
          queryClient.invalidateQueries(['courseDetails']);
        },
        onError: (error) => {
          console.error('Error in like:', error);
        }
      });
      
  return likeMutation
}

export const useDisLikeCourse = (CourseId) => {
    const queryClient = useQueryClient();

    const dislikeMutation  = useMutation({
        mutationFn: () => postAddDislikeCourse(CourseId),
        onSuccess: () => {
          queryClient.invalidateQueries(['courseDetails']);
        },
        onError: (error) => {
          console.error('Error in dislike:', error);
        }
      })
      
  return dislikeMutation
}

export const useDelLikeCourse = (CourseId) => {
  const queryClient = useQueryClient();

  const dislikeMutation  = useMutation({
      mutationFn: () => deleteLikeCourse(CourseId),
      onSuccess: () => {
        queryClient.invalidateQueries(['courseDetails']);
      },
      onError: (error) => {
        console.error('Error in dislike:', error);
      }
    })
    
      
return dislikeMutation
}
