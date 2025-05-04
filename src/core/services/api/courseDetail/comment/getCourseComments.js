import http from "../../../interceptor"; //axios//

export const getCourseComments = async (CourseId) => {
   
    try {
        const result = await http.get(`/Course/GetCourseCommnets/${CourseId}`);
        console.log(result, 'res')
        console.log('fetchStarted',result )
        return result;

    } catch (error) {   
        console.log(error, 'commentsssss');
        return error;
        
    }
};
