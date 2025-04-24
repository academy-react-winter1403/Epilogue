import http from "../../interceptor"; //axios//

export const postBlogRating = async (newsId) => {
    try {
        const result = await http.post(`/News/NewsRate?NewsId=${newsId}`);
        return result;
      
    } catch (error) {   
        console.log(error);
        return error;
        
    }
};