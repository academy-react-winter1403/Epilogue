import { getCourseComments } from '../../services/api/courseDetail/comment/getCourseComments';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postAddComment } from '../../services/api/courseDetail/comment/postAddComment';
import { postCourseCommentsReply } from '../../services/api/courseDetail/comment/courseCommentReply';
import { getCourseCommentsReply } from '../../services/api/courseDetail/comment/courseCommentReply';

export const useGetCommentCourse = (CourseId) => {
  return useQuery({
    queryKey: ['CommentReplies', CourseId],
    queryFn: () => getCourseComments(CourseId),
    initialData: [],
  });
};

// add comment
export const usePostCommentCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({id, title, describe}) => postAddComment(id, title, describe),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['CommentReplies', variables.id]);
    },
  });
};
// add reply comment
export const usePostCommentReply = () => { 
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({commentId, id, title, describe}) => postCourseCommentsReply(commentId, id, title, describe),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['CommentReplies', variables.id]);
    },
  });
}

export const useGetCommentReplies = (CourseId, commentId) => {
  return useQuery({
    queryKey: ['CommentReplies', CourseId, commentId],
    queryFn: () => getCourseCommentsReply(CourseId, commentId),
    enabled: !!commentId,
  });
};