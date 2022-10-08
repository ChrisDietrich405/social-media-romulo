import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../model";

import styles from "./styles.module.css";

import logo from "../../assets/logo.png";

interface PostItemProps {
  post: IPost;
}

const PostItem = ({ post }: PostItemProps) => {
  const [readMore, setReadMore] = useState(false);

  const navigate = useNavigate();

  const handleGoToPost = () => {
    navigate(`post/${post.id}`);
  };

  return (
    <li className={styles.post_item}>
      <div className={styles.title_container}>
        <h1>{post.title}</h1>
        <button onClick={handleGoToPost}>See Full</button>
      </div>
      <img src={logo} alt="" />
      <h2>Author: {post.author}</h2>
      <ul>
        return (
        <li className={styles.text_container}>
          <p>{readMore ? post.text : post.text.substring(0, 60)}</p>
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read less" : "Read more"}
          </button>
        </li>
        );
      </ul>
    </li>
  );
};

export default PostItem;
