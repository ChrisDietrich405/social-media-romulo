import React, { useRef } from "react";
import CommentItem from "./CommentItem";

const EditItem = ({
  comments,
  handleConfirmEditComment,
  handleDeleteComment,
}) => {
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <CommentItem
            comment={comment}
            handleConfirmEditComment={handleConfirmEditComment}
            handleDeleteComment={handleDeleteComment}
          />
        );
      })}
    </ul>
  );
};

export default EditItem;
