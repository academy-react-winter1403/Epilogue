import { LikeDislikeToggle } from "../../common/LikeDislikeToggle"
import { useLikeCourse, useDisLikeCourse, useDelLikeCourse } from "../../../core/hooks/courseHooks/useLikeDislikeCourse"

const LikeDislikeCourse = ({CourseId, currentUserLike, currentUserDissLike}) => {

    const liked = useLikeCourse(CourseId)
    const disliked = useDisLikeCourse(CourseId)
    const delLike = useDelLikeCourse(CourseId)

  return (
    <LikeDislikeToggle CourseId={CourseId} currentUserLike={currentUserLike} currentUserDissLike={currentUserDissLike} liked={liked} disliked={disliked} delLike={delLike} />
  )
}

export { LikeDislikeCourse }
