import http from "../../interceptor"; //axios//

export const postLikeBlog = async (newsId) => {
    console.log(newsId,'asuhashaviaspviavaopvja parsa')
    try {
        const result = await http.post(`/News/NewsLike/${newsId}`);
        return result;

    } catch (error) {
        console.log(error, "postLikeBlog");
        return error;

    }
};

export const postDislikeBlog = async (newsId) => {
    try {
        const result = await http.post(`/News/NewsDissLike/${newsId}`);
        return result;

    } catch (error) {
        console.log(error, 'postDislikeBlog');
        return error;

    }
};


export const deletelikeBlog = async (likeId) => {

    try {
        const result = await http.delete(`/News/DeleteLikeNews`, { data:{deleteEntityId: likeId} }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return result;

    } catch (error) {
        console.log(error, 'deletelikeBlog');
        return error;

    }
};