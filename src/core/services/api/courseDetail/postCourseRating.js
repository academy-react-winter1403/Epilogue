import http from "../../interceptor"; //axios//

export const postCourseRating = async (CourseId) => {
    console.log(CourseId , 'CourseId')
    const formData = new FormData()
    formData.append('courseID', CourseId)
    try {
        const result = await http.post(`/Course/SetCourseRating?CourseId=${CourseId}`);
        return result;
      
    } catch (error) {   
        console.log(error);
        return error;
        
    }
};