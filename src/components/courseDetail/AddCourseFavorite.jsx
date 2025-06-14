import { useFavoriteMutation } from "../../core/hooks/courseHooks/useFavoriteMutation";
import { AddFavorites } from "../common/AddFavorites";

const AddCourseFavorite = ({CourseId, isFav , userFavoriteId}) => {
  const favMutate = useFavoriteMutation(CourseId, isFav, userFavoriteId);

  return (
    <AddFavorites isFav={isFav} CourseId={CourseId} mutation={favMutate}/>
  )
}

export default AddCourseFavorite
