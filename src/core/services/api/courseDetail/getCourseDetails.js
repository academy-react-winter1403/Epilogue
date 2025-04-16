import http from "../../interceptor"; //axios//

export const getCourseDetails = async (CourseId) => {
    console.log(CourseId , 'CourseId')
    try {
        const result = await http.get(`/Home/GetCourseDetails?CourseId=${CourseId}`);
        return result;
      
    } catch (error) {   
        console.log(error);
        return error;
        
    }
    
};
