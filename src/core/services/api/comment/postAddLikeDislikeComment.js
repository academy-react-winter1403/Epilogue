import http from "../../interceptor"; //axios//

export const postAddLikeComment = async (CourseId) => {
    try {
        const result = await http.post(`/Course/AddCourseCommentLike?CourseCommandId=${CourseId}`);
        console.log("likeeee shooddd",result);
        return result;
      
    } catch (error) {   
        console.log(error,"no");
        return error;
        
    }
};

export const postAddDislikeComment = async (CourseId) => {
    try {
        const result = await http.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${CourseId}`);
        console.log("dorosteee")
        return result;
      
    } catch (error) {   
        console.log(error,'dislike');
        return error;
        
    }
};