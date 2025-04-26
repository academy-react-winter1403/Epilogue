import { useFavoriteMutation } from "../../core/hooks/courseHooks/useFavoriteMutation";
import { AddFavorites } from "../common/AddFavorites";

const AddCourseFavorite = ({CourseId,isFav}) => {
  const favMutate = useFavoriteMutation(CourseId, isFav);

  return (
    <AddFavorites isFav={isFav} CourseId={CourseId} mutation={favMutate}/>
  )
}

export default AddCourseFavorite
