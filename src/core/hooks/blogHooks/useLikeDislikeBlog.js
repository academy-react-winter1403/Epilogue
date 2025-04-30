import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletelikeBlog, postLikeBlog, postDislikeBlog } from '../../services/api/blogDetail/likeDislikeBlog.js';
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
        mutationFn: () => postDislikeBlog(newsId),
        onSuccess: () => {
          queryClient.invalidateQueries(['blogDetails-dis']);
        },
        onError: (error) => {
          console.error('Error in dislike:', error);
        }
      })
      
        
  return dislikeMutation
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
