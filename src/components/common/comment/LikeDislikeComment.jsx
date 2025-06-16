import likeCommentIcon from '../../../assets/icons/likeCommentIcone.svg'
import dislikeCommentIcon from '../../../assets/icons/dislikeCommentIcon.svg'
import activelikeCommentIcon from '../../../assets/icons/activeLikeCommentIcone.svg'
import activeDislikeCommentIcon from '../../../assets/icons/activDislikeCommentIcon.svg'
import { motion, AnimatePresence } from "framer-motion";
  
const LikeDislikeComment = ({
  likeCount,
  dissLikeCount,
  delLike,
  disliked,
  liked,
  currentUserIsLike, 
  currentUserIsDissLike,
  currentUserEmotion 
}) => {

  const hasLiked = currentUserEmotion 
    ? currentUserEmotion === "LIKED" 
    : currentUserIsLike;

  const hasDisliked = currentUserEmotion 
    ? currentUserEmotion === "DISSLIKED" 
    : currentUserIsDissLike;

  const handleLike = () => {
    if (hasLiked) {
      delLike.mutate(); 
    } else {
      liked.mutate(); 
    }
  };

  const handleDislike = () => {
    disliked.mutate(); 
  };

  return (
    <div className="flex justify-center items-center w-[100px] h-full gap-2">

      <div className='flex justify-center items-center'>
        <button 
          onClick={handleLike}
          disabled={liked.isLoading || disliked.isLoading || delLike.isLoading}
          className='w-[56px] h-[56px]'
        >
          <img 
            src={hasLiked ? activelikeCommentIcon : likeCommentIcon} 
            className="cursor-pointer"
            alt={hasLiked ? 'Remove like' : 'Like'}
          />
        </button>
        <AnimatePresence mode="wait">
          <motion.span
            key={likeCount}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="text-gray-700 h-[16px] mr-[-30px] mb-1"
          >
            {likeCount}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className='flex items-center justify-center'>
        <button 
          onClick={handleDislike}
          disabled={liked.isLoading || disliked.isLoading || delLike.isLoading}
          className="w-[56px] h-[56px] mt-1.5"
        >
          <img 
            src={hasDisliked ? activeDislikeCommentIcon : dislikeCommentIcon}
            className={`cursor-pointer${hasDisliked ? 'opacity-50 cursor-not-allowed' : ''}`}
            alt={hasDisliked ? 'Disliked' : 'Dislike'}
          />
        </button>
        <AnimatePresence mode="wait">
          <motion.span
            key={dissLikeCount}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="text-gray-700 mr-[-30px] mb-1"
          >
            {dissLikeCount}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
export { LikeDislikeComment }