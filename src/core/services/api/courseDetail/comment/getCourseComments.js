import http from "../../../interceptor"; //axios//

export const getCourseComments = async (CourseId) => {
    console.log('fetchStarted')
    try {
        const result = await http.get(`/Course/GetCourseCommnets/${CourseId}`);
        console.log(result, 'res')

        return result;

    } catch (error) {   
        console.log(error, 'commentsssss');
        return error;
        
    }
};
