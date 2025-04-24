import http from "../../../interceptor"; //axios//

export const getBlogComment = async (newsId) => {
    try {
        const result = await http.get(`/News/GetNewsComments?NewsId=${newsId}`);
        return result;
      
    } catch (error) {   
        console.log(error,"addComment-blog");
        return false;
        
    }
};
