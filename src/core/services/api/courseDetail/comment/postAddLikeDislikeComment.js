import http from "../../../interceptor"; //axios//

export const postAddLikeComment = async (CourseCommandId) => {
    try {
        const result = await http.post(`/Course/AddCourseCommentLike?CourseCommandId=${CourseCommandId}`);
        console.log("likeeee shooddd",result);
        return result;
      
    } catch (error) {   
        console.log(error,"no");
        return error;
        
    }
};

export const postAddDislikeComment = async (CourseCommandId) => {
    try {
        const result = await http.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${CourseCommandId}`);
        console.log("dorosteee")
        return result;
      
    } catch (error) {   
        console.log(error,'dislike');
        return error;
        
    }
};

export const deleteLikeComment = async (CourseCommandId,currentUserLikeId) => {
    try {
        const result = await http.delete(`/Course/DeleteCourseCommentLike?CourseCommandId=${CourseCommandId}`);
        return result;
      
    } catch (error) {   
        console.log(error,'delete-like-comment');
        return error;
        
    }
};
