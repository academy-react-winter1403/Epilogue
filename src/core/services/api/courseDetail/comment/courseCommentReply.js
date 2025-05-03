import { formDataModifire } from "../../../../utils/formDataModifire";
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
    const obj = {key: 'j',key2:'ll'}
    const formData = formDataModifire(obj)

    try {
        const result = await http.post(`/Course/AddReplyCourseComment`, formData);
        console.log('post shoodddd')
        return result;

    } catch (error) {   
        console.log(error , 'postCourseComments-Reply');
        return error;
        
    }
};
