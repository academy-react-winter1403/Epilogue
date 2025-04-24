import {postAddLikeComment, postAddDislikeComment, deleteLikeComment} from '../../../core/services/api/comment/postAddLikeDislikeComment'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCommentLike = (CourseId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ newReaction, currentReaction }) => {
      if (currentReaction === 'like' && newReaction === 'like') {
        await deleteLikeComment(CourseId);
        return;
      }

      if (newReaction === 'like') {
        await postAddLikeComment(CourseId);
      } else if (newReaction === 'dislike') {
        await postAddDislikeComment(CourseId);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['courseDetails', CourseId]);
    }
  });
};

