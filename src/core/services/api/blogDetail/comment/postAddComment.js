import http from "../../../interceptor"; //axios//

export const postAddComment = async (id, userIpAddress, title, describe, userId) => {
    try {
      const result = await http.post('/News/CreateNewsComment', {
        newsId: id,
        userIpAddress: userIpAddress,
        title: title,
        describe: describe,
        userId: userId,
      });
      return result;
    } catch (error) {
      console.log(error, "addComment-blog");
      return false;
  }
}