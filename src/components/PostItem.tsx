import React from "react";

interface Comments {
   id: number;
   author: string;
   message: string; 
   like: number;
}

interface PostItem {
  title: string;
  id: number;
  author: string;
  comments: Comments[];
}

interface PostItemProps {
  post: PostItem;
}

const PostItem = ({ post }: PostItemProps) => {
  return <li>
    <h1>{post.title}</h1>
  </li>;
};

export default PostItem;
