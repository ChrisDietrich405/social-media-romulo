import React from "react";
import { posts } from "../../data";
import PostItem from "../PostItem";

import styles from "./styles.module.css";

const Home = () => {
  return (
    <main>
      <h1>Welcome to RomMeet!</h1>
      <ul className={styles.list_container}>
        {posts.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })}
      </ul>
    </main>
  );
};

export default Home;
