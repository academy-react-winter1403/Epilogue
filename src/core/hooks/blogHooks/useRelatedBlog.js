import { useQuery } from '@tanstack/react-query';
import { getNewsFilterPage } from '../../services/api/blogDetail/getNewsFilterPage';

export const useRelatedBlogs = (newsId) => {
    return useQuery({
      queryKey: ['relatedBlogs', newsId],
      queryFn: () => getNewsFilterPage(), 
    });
   }