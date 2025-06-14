import { formDataModifire } from "../../../utils/formDateModifier";
import http from "../../interceptor"; //axios//

export const postAddCourseFavorite = async (CourseId) => {
    try {
        const result = await http.post(`/Course/AddCourseFavorite`, {courseId: CourseId});
        return result;
      
    } catch (error) {   
        console.log(error,"favorite");
        return false;
        
    }
};

export const deleteCourseFavorite = async (userFavoriteId) => {
    try {
         const formData = formDataModifire({CourseFavoriteId: userFavoriteId })

        const result = await http.delete('/Course/DeleteCourseFavorite', {data: formData});
        return result;
    } catch (error) {
        console.log(error, 'deleteFave');
        return false; 
};
}