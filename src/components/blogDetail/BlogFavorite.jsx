import { useFavoriteMutation } from "../../core/hooks/blogHooks/useFavoriteMutation";
import { AddFavorites } from "../common/AddFavorites";

const BlogFavorite = ({blogId,isFav}) => {
  const favMutate = useFavoriteMutation(blogId, isFav);

  return (
    <AddFavorites isFav={isFav} blogId={blogId} mutation={favMutate}/>
  )
}

export { BlogFavorite }
