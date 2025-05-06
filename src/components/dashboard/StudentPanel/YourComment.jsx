import React from "react";
import {
  useGetCommentCourse,
  useGetCommentReplies,
  usePostCommentCourse,
  usePostCommentReply,
} from "../../../core/hooks/courseHooks/useCommentCourse";
import { CommentSection } from "../../common/comment/CommentSection";

const YourComment = ({ CourseId, course }) => {
  
  const getComment = useGetCommentCourse(CourseId);
  const postComment = usePostCommentCourse();
  const postReply = usePostCommentReply();
  const getReplies = useGetCommentReplies;
  return (
    <>
      <CommentSection
        id={CourseId}
        contentId={course}
        getComment={getComment}
        postComment={postComment}
        getReplies={getReplies}
        postReply={postReply}
      />
    </>
  );
};

export default YourComment;
