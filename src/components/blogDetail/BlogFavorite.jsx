import { useFavoriteMutation } from "../../core/hooks/blogHooks/useFavoriteMutation";
import { AddFavorites } from "../common/AddFavorites";

const BlogFavorite = ({newsId,isFav}) => {
  const favMutate = useFavoriteMutation(newsId, isFav);

  return (
    <AddFavorites isFav={isFav} newsId={newsId} mutation={favMutate}/>
  )
}

export { BlogFavorite }
