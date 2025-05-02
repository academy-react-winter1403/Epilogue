import http from "../../interceptor"; //axios//

export const postAddCourseFavorite = async (CourseId) => {
    try {
        const result = await http.post('/Course/AddCourseFavorite',{data: {courseId: CourseId}});
        return result;
      
    } catch (error) {   
        console.log(error,"favorite");
        return false;
        
    }
};

export const deleteCourseFavorite = async (userFavoriteId) => {
    try {
        const formData = new FormData();
        formData.append('courseFavoriteId', userFavoriteId);

        const result = await http.delete('/Course/DeleteCourseFavorite', formData);
        return result;
    } catch (error) {
        console.log(error, 'deleteFave');
        return false; 
};
}