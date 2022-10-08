import React, {useState, useRef} from "react";
import { useParams } from "react-router-dom";

import { returnPostWithId } from "../../data";

import styles from "./styles.module.css";

import logo from "../../assets/logo.png";

interface IComment {
  id: number;
  name: string; 
}
interface IComments {
  comments: IComment[]
}

const PostPage = () => {
  let { postId } = useParams();
  const postData = returnPostWithId(parseInt(postId));
  const [textArea, setTextArea] = useState<string>("")
  const [comments, setComments] = useState<IComments[]>([])
  const [editId, setEditId] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const inputRef = useRef()

  const handleAddComment = () => {
      setComments([...comments, {name: textArea, id: Date.now()}])
      setTextArea("")
    }

  const handleDeleteComment  = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id)
    setComments(updatedComments)
  }

  const handleEditComment = (id: number) => {
    const specificComment = comments.find((comment) => comment.id === id)
    setTextArea(specificComment.name)
    setEditId(id)
    setIsEditing(true)
    
  }

  const handleConfirmEdit = () => {
    const updatedComments = comments.map((comment) => {
      if(comment.id === editId) {
        return {...comment, name: textArea}
      } 
    })
    setComments(updatedComments)
    setIsEditing(false)
  }

  

  return (
    <div className={styles.post_page_container}>
      {postData && (
        <>
          <h1>{postData.title}</h1>
          <img src={logo} alt={postData.title} />
          <div className={styles.text_container}>
            <h3>
              <span>Author:</span> {postData.author}
            </h3>
            <p>
              <span>Text:</span> {postData.text}
            </p>
            <h2>Comments</h2>
            <div>
              {postData.comments.map((comment) => {
                return (
                  <p>
                    <span>Comment: </span>
                    {comment.message}
                  </p>
                );
              })}
            </div>
          </div>
          <h2>Do you have something to say about this?</h2>
          <textarea value={textArea} 
          onChange={(e) => setTextArea(e.target.value)}
          name="" id="" cols="120" rows="10"></textarea>
          <button onClick={handleAddComment}>add comment</button>
          <ul className={styles.comment_list}>{comments.map((comment) => {
            return (
              <li>
              <h3 className="active">{comment.name}
              <button onClick={() => handleDeleteComment(comment.id)}>delete comment</button></h3>
              <button onClick={() => handleEditComment(comment.id)}>edit </button>    
              <input className={isEditing ? "active" : ""} ref={inputRef} type="text" placeholder="edit"/>
              <button onClick={() => handleConfirmEdit(comment.id)}>confirm </button>
              </li>
            )
          })}</ul>
        </>
      )}
    </div>
  );
};

export default PostPage;
