import http from "../../interceptor"; //axios//

export const postAddComment = async (CourseId) => {
    try {
        const result = await http.post(`/Course/AddCommentCourse`,{CourseId});
        return result;
      
    } catch (error) {   
        console.log(error,"addComment");
        return false;
        
    }
};