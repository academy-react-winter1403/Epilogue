import http from "../../interceptor"; //axios//

export const postBlogRating = async (newsId , RateNumber) => {
    try {
        const result = await http.post(`/News/NewsRate?NewsId=${newsId}&RateNumber=${RateNumber}`);
        return result;
      
    } catch (error) {   
        console.log(error);
        return error;
        
    }
};