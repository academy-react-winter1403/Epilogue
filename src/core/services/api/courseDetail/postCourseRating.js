import http from "../../interceptor"; //axios//


export const postCourseRating = async (CourseId, RateNumber) => {

    try {
        const result = await http.post(`/Course/SetCourseRating?CourseId=${CourseId}&RateNumber=${RateNumber}`);
        return result;
      
    } catch (error) {   
        console.log(error);
        return error;
        
    }
};