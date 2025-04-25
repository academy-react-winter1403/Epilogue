import { useQuery } from '@tanstack/react-query'
import { getBlogDetails } from '../../services/api/blogDetail/getBlogDetails'; 
import { useParams } from 'react-router-dom'

export const useBlogDetails = () => {
   const {newsId} = useParams();
  console.log(newsId, 'kkk')
   const query = useQuery({
     queryKey: ['blogDetails', newsId],
     queryFn: () => getBlogDetails(newsId),
     enabled: !!newsId 
   });

  return query
};