import http from "../../../interceptor"; //axios//

export const postAddLikeComment = async (commentId) => {
    try {
        const result = await http.post(`/News/CommentLike/${commentId}?LikeType=true`);
        console.log("likeeee",result);
        return result;
      
    } catch (error) {   
        console.log(error,"no");
        return error;
        
    }
};

export const postAddDislikeComment = async (commentId) => {
    try {
        const result = await http.post(`/News/CommentLike/${commentId}?LikeType=false`);
        console.log("dorosteee")
        return result;
      
    } catch (error) {   
        console.log(error,'dislike');
        return error;
        
    }
};

export const deleteLikeComment = async (currentUserLikeId) => {
    try {
        const result = await http.delete(`/News/DeleteCommentLikeNews`,{data:{deleteEntityId:currentUserLikeId}});
        return result;
      
    } catch (error) {   
        console.log(error,'delete-like-comment');
        return error;
        
    }
};