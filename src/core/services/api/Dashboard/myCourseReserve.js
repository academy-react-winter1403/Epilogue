import http from "../../interceptor"; //axios//

export const getReservedCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCoursesReserve")
        return response
    } catch (error) {
        throw error
    }
}