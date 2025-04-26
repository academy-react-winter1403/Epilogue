import {postAddLikeComment, postAddDislikeComment, deleteLikeComment} from '../../../core/services/api/blogDetail/comment/postAddLikeDislikeComment'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCommentLike = (newsId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ newReaction, currentReaction }) => {
      if (currentReaction === 'like' && newReaction === 'like') {
        await deleteLikeComment(newsId);
        return;
      }

      if (newReaction === 'like') {
        await postAddLikeComment(newsId);
      } else if (newReaction === 'dislike') {
        await postAddDislikeComment(newsId);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['blogDetails-like', newsId]);
    }
  });
};

