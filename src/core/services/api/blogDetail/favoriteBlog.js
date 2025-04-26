import http from "../../interceptor"; //axios//

export const postAddBlogFavorite = async (newsId) => {
    console.log(newsId, 'favorit')
    try {
        const result = await http.post(`/News/AddFavoriteNews?NewsId=${newsId}`);
        return result;
      
    } catch (error) {   
        console.log(error,"favoriteNews");
        return false;
        
    }
};

export const deleteBlogFavorite = async (newsId) => {
    try {
        const result = await http.delete(`/News/DeleteFavoriteNews`,{data: {deleteEntityId:newsId} }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return result;
      
    } catch (error) {   
        console.log(error,"deleteFaveNews");
        return false;
        
    }
};