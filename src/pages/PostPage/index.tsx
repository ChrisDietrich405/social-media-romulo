import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

import EditItem from "../../components/EditItem";
import { returnPostWithId } from "../../data";

import styles from "./styles.module.css";

import logo from "../../assets/logo.png";

interface IComment {
  id: number;
  name: string;
}
interface IComments {
  comments: IComment[];
}

const PostPage = () => {
  let { postId } = useParams();
  const postData = returnPostWithId(parseInt(postId));
  const [comments, setComments] = useState([]);
  const [editId, setEditId] = useState(0);

  const inputRef = useRef();
  const textAreaRef = useRef();

  const handleAddComment = () => {
    setComments([
      ...comments,
      {
        personalIcon: <BiUserCircle size="60" />,
        message: textAreaRef.current.value,
        id: Date.now(),
        author: "chris",
      },
    ]);

    textAreaRef.current.value = "";
  };

  const handleConfirmEditComment = (editInput, commentId) => {
    
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, message: editInput.current.value };
      } else {
        return comment;
      }
    });

    setComments(updatedComments);
    console.log(comments)
  };

  const handleDeleteComment = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const handleEditComment = (id: number) => {
    const editComment = comments.find((comment) => comment.id === id);
    textAreaRef.current.value = editComment.message;
    setIsEditing(true);
    setEditId(id);
  };

  useEffect(() => {
    if (postData) {
      setComments(postData.comments);
    }
  }, [postData]);

  return (
    <div className={styles.post_page_container}>
      {postData && (
        <>
          <h1>{postData.title}</h1>
          <img src={postData.image} alt={postData.title} />
          <div className={styles.text_container}>
            <div className={styles.author_container}>
              <h3>Author: &nbsp;</h3>

              <p>{postData.author}</p>
            </div>

            <h3>Text:</h3>
            <p> {postData.text}</p>
          </div>
          <div className={styles.comments_container}>
            <h2>Comments:</h2>

            <EditItem
              comments={comments}
              handleEditComment={handleEditComment}
              handleConfirmEditComment={handleConfirmEditComment}
              handleDeleteComment={handleDeleteComment}
              setEditId={setEditId}
            />
          </div>

          <h2 style={{ marginBottom: "20px" }}>
            Do you have something to say about this?
          </h2>
          <textarea
            ref={textAreaRef}
            name=""
            id=""
            cols="120"
            rows="10"
          ></textarea>
          <ul className={styles.comment_list}>
            <button onClick={handleAddComment}>Add Comment</button>
           
            {comments.map((comment) => {
              return (
                <li>
                  <h3 className="active">{comment.name}</h3>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default PostPage;
