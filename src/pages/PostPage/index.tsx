import React from "react";
import { useParams } from "react-router-dom";

import { returnPostWithId } from "../../data";

import styles from "./styles.module.css";

import logo from "../../assets/logo.png";

const PostPage = () => {
  let { id } = useParams();
  const postData = returnPostWithId(parseInt(id));
  console.log(postData);

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
        </>
      )}
    </div>
  );
};

export default PostPage;
