import { getBlogComment } from '../../services/api/blogDetail/comment/getBlogComments';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postAddComment } from '../../services/api/blogDetail/comment/postAddComment';
import { postCommentsReply, getCommentsReply } from '../../services/api/blogDetail/comment/CommentReply';

export const useGetCommentBlog = (newsId) => {
  console.log(newsId, 'parsa pastil')
    return useQuery({
      queryKey: ['blogDetails-comment', newsId],
      queryFn: () => getBlogComment(newsId),
      initialData: [],
      select: (data) => Array.isArray(data) ? data : []
    });
  };
  
  //add comment
export const usePostCommentBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, userIpAddress, title, describe, userId }) =>
      postAddComment(id, userIpAddress, title, describe, userId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['blogDetails', variables.id]);
    },
  });
};

// add reply

export const usePostCommentReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, userIpAddress, title, describe, userId, ...replyData }) =>
      postCommentsReply(id, userIpAddress, title, describe, userId , replyData),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['blogDetails-reply', variables.id]);
    },
  });
};

export const useGetCommentReplies = (id) => {
  return useQuery({
    queryKey: ['blogDetails-reply'],
    queryFn: () => getCommentsReply(id)
  });
};