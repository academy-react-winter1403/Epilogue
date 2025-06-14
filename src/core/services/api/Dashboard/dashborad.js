import http from "../../interceptor/index"; //axios//

export const getUserInfo = async () => {
    try {
       
        const response = await http.get("/SharePanel/GetProfileInfo")
        console.log(response)
        return response
    } catch (error) {
        throw error
    }
}

export const getMyCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=")
        return response
    } catch (error) {
        throw error
    }
}

export const getReservedCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCoursesReserve")
        return response
    } catch (error) {
        throw error
    }
}

// Delete //
export const deleteCourseReserve = async (reservedCourse) => {
    try {
        const response = await http.delete("/CourseReserve", { data: reservedCourse })
        return response
    } catch (error) {
        throw false
    }
}

export const getFavoriteCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyFavoriteCourses")
        return response
    } catch (error) {
        throw error
    }
}

// Delete //
export const deleteCourseFav = async (formdata) => {
    console.log(formdata);
    try {
        const result = await http.delete("/Course/DeleteCourseFavorite", { data: formdata });

        return result
    } catch (error) {
        throw false;
    }
}

export const getFavoriteArticles = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyFavoriteNews")
        return response
    } catch (error) {
        throw error
    }
}

// Delete //
export const deletenewseFav = async (RemoveFavNews) => {
    try {
        const result = await http.delete("/News/DeleteFavoriteNews", { data: RemoveFavNews });
        return result
    } catch (error) {
        throw false;
    }
}

export const editProfile = async (userInfo) => {
    try {
        const response = await http.put("/SharePanel/UpdateProfileInfo", userInfo)
        return response
    } catch (error) {
        throw error
    }
}

export const addProfileImage = async (profile) => {
    try {
        const response = await http.post("/SharePanel/AddProfileImage", profile)
        return response
    } catch (error) {
        throw error
    }
}

export const selectProfileImage = async (profile) => {
    try {
        const response = await http.post("/SharePanel/SelectProfileImage", profile)
        return response
    } catch (error) {
        throw error
    }
}

export const deleteProfileImage = async (profile) => {
    try {
        const response = await http.delete("/SharePanel/DeleteProfileImage",profile)
        return response
    } catch (error) {
        throw false
    }
}

export const changePassword = async (newPassword) => {
    try {
        const response = await http.post("/SharePanel/ChangePassword", newPassword)
        return response
    } catch (error) {
        throw error
    }
}

export const getCourseComments = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCoursesComments")
        return response
    } catch (error) {
        throw error
    }
}
export const getArticlesComments = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyNewsComments")
        return response
    } catch (error) {
        throw error
    }
}