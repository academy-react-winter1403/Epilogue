import { formDataModifire } from "../../../../utils/formDateModifier";
import http from "../../../interceptor"; //axios//

export const getCourseCommentsReply = async (id,commentId) => {
    try {
        const result = await http.get(`/Course/GetCourseReplyCommnets/${id}/${commentId}`);
        return result;

    } catch (error) {   
        console.log(error , 'getCourseComments-Reply');
        return error;
        
    }
};

export const postCourseCommentsReply = async (commentId, id, title, describe) => {
       const obj = {CommentId:commentId, CourseId:id, Title:title, Describe:describe}
        const formData = formDataModifire(obj)
    try {
        const result = await http.post(`/Course/AddReplyCourseComment`,{formData});
        console.log('post shoodddd')
        return result;

    } catch (error) {   
        console.log(error , 'postCourseComments-Reply');
        return error;
        
    }
};
