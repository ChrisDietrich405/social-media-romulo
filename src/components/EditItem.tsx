import React, { useRef } from "react";
import CommentItem from "./CommentItem";

const EditItem = ({
  comments,
  setEditId,
  handleConfirmEditComment,
  handleDeleteComment,
  handleEditComment,
  setIsEditing,
  isEditing,
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
