import { formDataModifire } from "../../../../utils/formDateModifier";
import http from "../../../interceptor"; //axios//

export const postAddComment = async (id, title, describe) => {
    const obj = {CourseId:id, Title:title, Describe:describe}
    const formData = formDataModifire(obj)
    try {
        const result = await http.post(`/Course/AddCommentCourse`, formData);
        return result;
      
    } catch (error) {   
        console.log(error,"addComment");
        return false;
        
    }
};