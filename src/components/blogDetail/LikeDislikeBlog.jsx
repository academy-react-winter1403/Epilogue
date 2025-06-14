import { LikeDislikeToggle } from "../common/LikeDislikeToggle"
import { useLikeBlog, useDisLikeBlog, useDelLikeBlog } from "../../core/hooks/blogHooks/useLikeDislikeBlog"


const LikeDislikeBlog = ({newsId, currentLikeCount, currentDissLikeCount, likeId}) => {


    const liked = useLikeBlog(newsId)
    const disliked = useDisLikeBlog(newsId)
    const delLike = useDelLikeBlog()

  return (
    <LikeDislikeToggle 
    currentUserLike={currentLikeCount} 
    currentUserDissLike={currentDissLikeCount} 
    liked={liked} 
    disliked={disliked} 

    delLike={delLike}
    userLikeId={likeId} />

  )
}

export { LikeDislikeBlog }
