import likeIconeActive from "../../assets/icons/like.svg"
import dislikeIcon from "../../assets/icons/dislike.svg"
import likeIcone1 from '../../assets/icons/like1.svg'
import dislikeIconActiv from '../../assets/icons/dislike2.svg'
import React, { useState } from 'react'

const LikeDislikeToggle = ({
    currentUserLike,
    currentUserDissLike,
    liked,
    disliked,
    delLike
  }) => {
    const [initialLike] = useState(true);
    const hasLiked = initialLike || currentUserLike === "1";
    const hasDisliked = currentUserDissLike === "1";
    
    const handleLike = () => {
      if (hasLiked) {
        delLike.mutate();
      } else {
        liked.mutate();
      }
    };
  
    const handleDislike = () => {
      if (hasLiked) {
        delLike.mutate().then(() => {
          disliked.mutate();
        });
      } else {
        disliked.mutate();
      }
    };
  
    return (
      <div className="flex gap-4">
        <button
          onClick={handleLike}
          disabled={liked.isLoading || disliked.isLoading || delLike?.isLoading}
          className="w-[56px] h-[56px] flex items-center rounded transition-all duration-200"
        >
          <img 
            src={hasLiked ? likeIconeActive : likeIcone1} 
            alt={hasLiked ? 'Remove like' : 'Like'} 
            className="cursor-pointer"
          />
        </button>
  
        <button
          onClick={handleDislike}
          disabled={liked.isLoading || disliked.isLoading || delLike?.isLoading}
          className="w-[56px] h-[56px] flex items-center rounded cursor-pointer transition-all duration-200"
        >
          <img 
            src={hasDisliked ? dislikeIconActiv : dislikeIcon} 
            alt={hasDisliked ? 'Remove dislike' : 'Dislike'} 
            className="cursor-pointer"
          />
        </button>
      </div>
    );
};

export { LikeDislikeToggle }
