import http from "../../interceptor"; //axios//

export const getCourseComments = async (CourseId) => {
    try {
        const result = await http.get(`/Course/GetCourseCommnets/${CourseId}`);
        return result;

    } catch (error) {   
        console.log(error);
        return error;
        
    }
};
