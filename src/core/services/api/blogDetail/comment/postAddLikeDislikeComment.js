import http from "../../../interceptor"; //axios//

export const postAddLikeComment = async (newsId) => {
    try {
        const result = await http.post(`/News/NewsLike/${newsId}`);
        console.log("likeeee shooddd",result);
        return result;
      
    } catch (error) {   
        console.log(error,"no");
        return error;
        
    }
};

export const postAddDislikeComment = async (newsId) => {
    try {
        const result = await http.post(`/News/NewsDissLike/${newsId}`);
        console.log("dorosteee")
        return result;
      
    } catch (error) {   
        console.log(error,'dislike');
        return error;
        
    }
};

export const deleteLikeComment = async (newsId) => {
    try {
        const result = await http.delete(`/News/DeleteLikeNews`,{newsId});
        return result;
      
    } catch (error) {   
        console.log(error,'delete-like-comment');
        return error;
        
    }
};