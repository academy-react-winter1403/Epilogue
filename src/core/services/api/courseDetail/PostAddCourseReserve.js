import http from "../../interceptor"; //axios//

export const postAddCourseReserve = async (CourseId) => {
    try {
        const result = await http.post(`/CourseReserve/ReserveAdd`, {courseId: CourseId});
        return result;
      
    } catch (error) {   
        console.log(error,"reserve");
        return false;
        
    }
};
