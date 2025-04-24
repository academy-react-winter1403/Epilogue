import { postLikeBlog, postDislikeBlog, deletelikeBlog } from '../../services/api/blogDetail/likeDislikeBlog.js'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useLikeBlog = (blogId) => {
    const queryClient = useQueryClient();

     const likeMutation  = useMutation({
        mutationFn: () => postLikeBlog(blogId),
        onSuccess: () => {
          queryClient.invalidateQueries(['blogDetails']);
        },
        onError: (error) => {
          console.error('Error in like:', error);
        }
      });
      
        
  return likeMutation
}

export const useDisLikeBlog = (blogId) => {
    const queryClient = useQueryClient();

    const dislikeMutation  = useMutation({
        mutationFn: () => postDislikeBlog(blogId),
        onSuccess: () => {
          queryClient.invalidateQueries(['blogDetails']);
        },
        onError: (error) => {
          console.error('Error in dislike:', error);
        }
      })
      
        
  return dislikeMutation
}

export const useDelLikeBlog = (blogId) => {
  const queryClient = useQueryClient();

  const dislikeMutation  = useMutation({
      mutationFn: () => deletelikeBlog(blogId),
      onSuccess: () => {
        queryClient.invalidateQueries(['blogDetails']);
      },
      onError: (error) => {
        console.error('Error in dislike:', error);
      }
    })
    
      
return dislikeMutation
}
