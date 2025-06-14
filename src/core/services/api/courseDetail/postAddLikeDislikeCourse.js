import { formDataModifire } from "../../../utils/formDateModifier";
import http from "../../interceptor"; //axios//

export const postAddLikeCourse = async (CourseId) => {
    try {
        const result = await http.post(`/Course/AddCourseLike?CourseId=${CourseId}`);
        console.log("likeeee",result);
        return result;
      
    } catch (error) {   
        console.log(error,"no");
        return error;
        
    }
};

export const postAddDislikeCourse = async (CourseId) => {
    try {
        const result = await http.post(`/Course/AddCourseDissLike?CourseId=${CourseId}`);
        console.log("like-course")
        return result;
      
    } catch (error) {   
        console.log(error,'dislike');
        return error;
        
    }
};

export const deleteLikeCourse = async (userLikeId) => {
    const formData = formDataModifire({ CourseLikeId: userLikeId })
    try {
        const result = await http.delete(`/Course/DeleteCourseLike`,{data:formData});
        return result;

    } catch (error) {
        console.log(error, 'delete-like-course');
        return error;
    }
};