import http from "../../interceptor"; //axios//

export const postAddLikeCourse = async (CourseId) => {
    try {
        const result = await http.post(`/Course/AddCourseLike?CourseId=${CourseId}`);
        console.log("likeeee",result);
        return result;
      
    } catch (error) {   
        console.log(error,"no");
        return error;
        
    }
};

export const postAddDislikeCourse = async (CourseId) => {
    try {
        const result = await http.post(`/Course/AddCourseDissLike?CourseId=${CourseId}`);
        console.log("dorosteee")
        return result;
      
    } catch (error) {   
        console.log(error,'dislike');
        return error;
        
    }
};