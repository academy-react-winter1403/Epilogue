import http from "../../interceptor"; //axios//

export const getBlogDetails = async (newsId) => {
    console.log(newsId , 'news')
    try {
       
        const result = await http.get(`/News/${newsId}`);
        return result;
      
    } catch (error) {   
        console.log(error);
        return error;

    }
    
};
