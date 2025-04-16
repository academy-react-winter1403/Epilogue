import http from "../../interceptor"; //axios//

export const getAllCourseByPagination = async (CourseId) => {
    console.log(CourseId , 'CourseId')
    try {
        const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${CourseId}`);
        return result;
      
    } catch (error) {   
        console.log(error);
        return error;
        
    }
    
};
