import { getBlogComment } from '../../services/api/blogDetail/comment/getBlogComments';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postAddComment } from '../../services/api/blogDetail/comment/postAddComment';
import { postCommentsReply, getCommentsReply } from '../../services/api/blogDetail/comment/CommentReply';

// export const useGetCommentBlog = (newsId) => {
//   return useQuery({
//     queryKey: ['blogDetails', newsId],
//     queryFn: () => getBlogComment(newsId),
//     initialData: [],
//   });
// };
export const useGetCommentBlog = (newsId) => {
    return useQuery({
      queryKey: ['blogDetails', newsId],
      queryFn: () => getBlogComment(newsId),
      initialData: [],
      select: (data) => Array.isArray(data) ? data : []
    });
  };
export const usePostCommentBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({newsId, ...commentData}) => postAddComment(newsId, commentData),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['blogDetails', variables.newsId]);
    },
  });
};

export const usePostCommentReply = () => { 
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({newsId, ...replyData}) => postCommentsReply(newsId, replyData),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['blogDetails', variables.newsId]);
    },
  });
}

export const useGetCommentReplies = (newsId) => {
  return useQuery({
    queryKey: ['blogDetails', newsId],
    queryFn: () => getCommentsReply(newsId)
  });
};