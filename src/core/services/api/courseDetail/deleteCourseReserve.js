import http from "../../interceptor";

export const deleteCourseReserve = async (id) => {
    try {
        const response = await http.delete("/CourseReserve", { data: id })
        return response
    } catch (error) {
        throw false
    }
}