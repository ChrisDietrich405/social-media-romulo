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

  const handleEditing = () => {
    setIsEditing(true)
    editedTextAreaRef.current.value = comment.message
  }

  return (
    <li className={styles.comments_list}>
      {comment.personalIcon}
      <div className={styles.comment_list}>
        <p>{comment.author}</p>

        {isEditing ? (
          <textarea rows="4" cols="40" className={styles.edit_textarea} ref={editedTextAreaRef} />
        ) : (
          <span>{comment.message}</span>
        )}
      </div>
      <button className={styles.comment_button} onClick={() => handleDeleteComment(comment.id)}>delete</button>
      <button className={styles.comment_button} onClick={handleEditing}>edit</button>
      {isEditing && <button onClick={handleConfirmEdit}>Confirm edit</button>}
    </li>
  );
};

export default CommentItem;
