import http from "../../interceptor"; //axios//

export const postAddCourseFavorite = async (CourseId) => {
    try {
        const result = await http.post(`/Course/AddCourseFavorite`,{CourseId});
        return result;
      
    } catch (error) {   
        console.log(error,"favorite");
        return false;
        
    }
};

export const deleteCourseFavorite = async (CourseId) => {
    try {
        const result = await http.delete(`/Course/DeleteCourseFavorite`,{CourseId});
        return result;
      
    } catch (error) {   
        console.log(error,"deleteFave");
        return false;
        
    }
};