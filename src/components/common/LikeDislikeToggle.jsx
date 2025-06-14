import likeIconeActive from "../../assets/icons/like.svg"
import dislikeIcon from "../../assets/icons/dislike.svg"
import likeIcone1 from '../../assets/icons/like1.svg'
import dislikeIconActiv from '../../assets/icons/dislike2.svg'

const LikeDislikeToggle = ({
    currentUserLike,
    currentUserDissLike,
    liked,
    disliked,
    delLike,
    userLikeId
  }) => {
  
    const hasLiked = currentUserLike === true;
    const hasDisliked = currentUserDissLike === true || currentUserDissLike === '1' ;
    
    const handleLike = () => {
      if (currentUserLike == true) {
        delLike.mutate(userLikeId);
      } else {
        liked.mutate();
      }
    
    };
  
    return (
      <div className="flex gap-4">
        <button
          onClick={handleLike}
          className="w-[56px] h-[56px] flex items-center rounded transition-all duration-200"
        >
          <img 
            src={currentUserLike == true ? likeIconeActive : likeIcone1} 
            alt={hasLiked ? 'Remove like' : 'Like'} 
            className="cursor-pointer"
          />
        </button>
  
  
        <button
          onClick={() => disliked.mutate() }
          disabled={hasDisliked}
          className={`w-[56px] h-[56px] flex items-center rounded transition-all duration-200 ${hasDisliked ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <img 
            src={hasDisliked ? dislikeIconActiv : dislikeIcon} 
            alt={hasDisliked ? 'Remove dislike' : 'Dislike'} 
            className={hasDisliked ? "cursor-not-allowed" : "cursor-pointer"}
        />
        </button>
      </div>
    );
};

export { LikeDislikeToggle }
