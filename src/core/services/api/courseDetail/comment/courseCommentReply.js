import http from "../../../interceptor"; //axios//

export const getCourseCommentsReply = async (CourseId,commentId) => {
    try {
        const result = await http.get(`/Course/GetCourseReplyCommnets/${CourseId}/${commentId}`);
        return result;

    } catch (error) {   
        console.log(error , 'getCourseComments-Reply');
        return error;
        
    }
};

export const postCourseCommentsReply = async (CourseId) => {
    try {
        const result = await http.post(`/Course/AddReplyCourseComment`,{CourseId});
        console.log('post shoodddd')
        return result;

    } catch (error) {   
        console.log(error , 'postCourseComments-Reply');
        return error;
        
    }
};
