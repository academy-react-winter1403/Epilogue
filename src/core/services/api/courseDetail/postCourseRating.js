import http from "../../interceptor"; //axios//

export const postCourseRating = async (CourseId, currentUserRateNumber) => {
    console.log(CourseId , 'CourseId')
    try {
        const result = await http.post(`/Course/SetCourseRating?CourseId=${CourseId}&RateNumber=${currentUserRateNumber}`);
        return result;
      
    } catch (error) {   
        console.log(error);
        return error;
        
    }
};