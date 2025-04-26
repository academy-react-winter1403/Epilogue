import http from "../../../interceptor"; //axios//

export const postAddComment = async (newsId) => {
    try {
        const result = await http.post(`/News/CreateNewsComment`,{newsId});
        return result;
      
    } catch (error) {   
        console.log(error,"addComment-blog");
        return false;
        
    }
};