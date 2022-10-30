import React, { useState, useRef } from "react";
import styles from "./styles.module.css";

const CommentItem = ({
  comment,
  handleConfirmEditComment,
  handleDeleteComment,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const editedTextAreaRef = useRef();

  const handleConfirmEdit = () => {
    handleConfirmEditComment(editedTextAreaRef, comment.id);
    setIsEditing(false);
  };

  return (
    <li>
      {comment.personalIcon}
      <div className={styles.comment_list}>
        <p>{comment.author}</p>

        {isEditing ? (
          <textarea ref={editedTextAreaRef} />
        ) : (
          <span>{comment.message}</span>
        )}
      </div>
      <button className={styles.comment_button} onClick={() => handleDeleteComment(comment.id)}>delete</button>
      <button className={styles.comment_button} onClick={() => setIsEditing(true)}>edit</button>
      {isEditing && <button onClick={handleConfirmEdit}>Confirm edit</button>}
    </li>
  );
};

export default CommentItem;
