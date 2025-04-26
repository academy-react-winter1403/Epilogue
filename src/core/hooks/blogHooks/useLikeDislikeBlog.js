
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postAddDislikeComment,deleteLikeComment, postAddLikeComment } from '../../services/api/blogDetail/comment/postAddLikeDislikeComment.js';
import { postLikeBlog } from '../../services/api/blogDetail/likeDislikeBlog.js';
export const useLikeBlog = (newsId) => {
    const queryClient = useQueryClient();

     const likeMutation  = useMutation({
        mutationFn: () => postLikeBlog(newsId),
        onSuccess: () => {
          queryClient.invalidateQueries(['blogDetails-likee']);
        },
        onError: (error) => {
          console.error('Error in like:', error);
        }
      });
      
        
  return likeMutation
}

export const useDisLikeBlog = (newsId) => {
    const queryClient = useQueryClient();

    const dislikeMutation  = useMutation({
        mutationFn: () => postAddDislikeComment(newsId),
        onSuccess: () => {
          queryClient.invalidateQueries(['blogDetails-dis']);
        },
        onError: (error) => {
          console.error('Error in dislike:', error);
        }
      })
      
        
  return dislikeMutation
}

export const useDelLikeBlog = (newsId) => {
  const queryClient = useQueryClient();

  const dislikeMutation  = useMutation({
      mutationFn: () => deleteLikeComment(newsId),
      onSuccess: () => {
        queryClient.invalidateQueries(['blogDetails']);
      },
      onError: (error) => {
        console.error('Error in dislike:', error);
      }
    })
    
      
return dislikeMutation
}
