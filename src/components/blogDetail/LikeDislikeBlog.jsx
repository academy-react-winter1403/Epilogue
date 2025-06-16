import { LikeDislikeToggle } from "../common/LikeDislikeToggle"
import { useLikeBlog, useDisLikeBlog, useDelLikeBlog } from "../../core/hooks/blogHooks/useLikeDislikeBlog"

const LikeDislikeBlog = ({newsId, currentLikeCount, currentDissLikeCount}) => {

    const liked = useLikeBlog(newsId)
    const disliked = useDisLikeBlog(newsId)
    const delLike = useDelLikeBlog(newsId)
    console.log(newsId)

  return (
    <LikeDislikeToggle 
    currentUserLike={currentLikeCount} 
    currentUserDissLike={currentDissLikeCount} 
    liked={liked} 
    disliked={disliked} 
    delLike={delLike} />
  )
}

export { LikeDislikeBlog }
