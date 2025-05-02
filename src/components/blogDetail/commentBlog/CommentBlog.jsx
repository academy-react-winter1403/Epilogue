import { CommentSection } from '../../common/comment/CommentSection.jsx'
import { useGetCommentBlog, usePostCommentBlog,usePostCommentReply,useGetCommentReplies } from '../../../core/hooks/blogHooks/useCommentBlog.js'
const CommentBlog = ({newsId, blog, userId, title, describe, parentId}) => {
    const getComment = useGetCommentBlog(newsId) 
    const postComment = usePostCommentBlog()
    const postReply = usePostCommentReply()
    const getReplies = useGetCommentReplies

  return (
    <CommentSection
      id={newsId}
      isBlog={newsId}
      contentId={blog} 
      getComment={getComment} 
      postComment={postComment} 
      postReply={postReply} 
      getReplies={getReplies}
      userId={userId}
      title={title}
      describe={describe}
      parentId={parentId}
    />
  )
}

export { CommentBlog }
