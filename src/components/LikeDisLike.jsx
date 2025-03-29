import React, { useState, useEffect } from 'react';
import axios from 'axios';
import likeIcone from "../assets/icons/like.svg"
import dislikeIcone from "../assets/icons/dislike.svg"

const LikeDislike = ({ itemId, itemType }) => {
    
  const [action, setAction] = useState(null);
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);

  useEffect(() => {
    axios.get()
      .then(response => {
        const { action, likes, dislikes } = response.data;
        setAction(action);
        setLikesCount(likes);
        setDislikesCount(dislikes);
      })
      .catch(error => {
        console.error('Error fetching like/dislike status:', error);
      });
  }, [itemId, itemType]);

  const handleLike = () => {
    const newAction = action === 'like' ? null : 'like';
    const newLikesCount = newAction === 'like' ? likesCount + 1 : likesCount - 1;
    const newDislikesCount = action === 'dislike' ? dislikesCount - 1 : dislikesCount;

    setAction(newAction);
    setLikesCount(newLikesCount);
    setDislikesCount(newDislikesCount);

    updateLikeDislikeStatus(newAction);
  };

  const handleDislike = () => {
    const newAction = action === 'dislike' ? null : 'dislike';
    const newDislikesCount = newAction === 'dislike' ? dislikesCount + 1 : dislikesCount - 1;
    const newLikesCount = action === 'like' ? likesCount - 1 : likesCount;

    setAction(newAction);
    setLikesCount(newLikesCount);
    setDislikesCount(newDislikesCount);

    updateLikeDislikeStatus(newAction);
  };

  const updateLikeDislikeStatus = (newAction) => {
    axios.post( { action: newAction })
      .then(response => {
        console.log('Like/Dislike status updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating like/dislike status:', error);
      });
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleLike}
        className={`flex items-center space-x-2 p-2 rounded ${
          action === 'like' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
        } hover:bg-blue-200 transition-colors`}
      >
        <img src={likeIcone} alt="likeIcone" />
        ({likesCount})
      </button>
      <button
        onClick={handleDislike}
        className={`flex items-center space-x-2 p-2 rounded ${
          action === 'dislike' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
        } hover:bg-red-200 transition-colors`}
      >
        <img src={dislikeIcone} alt="dislikeIcone" />
         ({dislikesCount})
      </button>
    </div>
  );
};

export {LikeDislike}