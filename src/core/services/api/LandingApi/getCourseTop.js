// import { baseUrl } from "../../../configs";
import http from "../../interceptor"; //axios//

export const getCourseTop = async () => {
    try {
        const result = await http.get(`/Home/GetCoursesTop`);
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};
