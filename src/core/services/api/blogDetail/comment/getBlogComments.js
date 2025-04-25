import http from "../../../interceptor"; //axios//

export const getBlogComment = async (newsId) => {
    const params = {NewsId:newsId}
    try {
        const result = await http.get(`/News/GetNewsComments`, {params});
        return result;
      
    } catch (error) {   
        console.log(error,"addComment-blog");
        return false;
        
    }
};
