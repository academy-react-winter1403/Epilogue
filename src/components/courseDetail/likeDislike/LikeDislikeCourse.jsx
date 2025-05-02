import { LikeDislikeToggle } from "../../common/LikeDislikeToggle"
import { useLikeCourse, useDisLikeCourse, useDeleteLikeCourse } from "../../../core/hooks/courseHooks/useLikeDislikeCourse"

const LikeDislikeCourse = ({CourseId, currentUserLike, currentUserDissLike, userLikeId}) => {

    const liked = useLikeCourse(CourseId)
    const disliked = useDisLikeCourse(CourseId)
    const delLike = useDeleteLikeCourse()

  return (
    <LikeDislikeToggle 
    currentUserLike={currentUserLike} 
    currentUserDissLike={currentUserDissLike} 
    liked={liked} 
    disliked={disliked} 
    delLike={delLike}
    userLikeId={userLikeId} />
  )
}

export { LikeDislikeCourse }
