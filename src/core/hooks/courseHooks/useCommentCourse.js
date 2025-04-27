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

export const usePostCommentCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({CourseId, ...commentData}) => postAddComment(CourseId, commentData),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['CommentReplies', variables.CourseId]);
    },
  });
};

export const usePostCommentReply = () => { 
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({CourseId, ...replyData}) => postCourseCommentsReply(CourseId, replyData),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['CommentReplies', variables.CourseId]);
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