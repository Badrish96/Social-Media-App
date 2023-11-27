import React from "react";
import "./posts.css";
import { PostData } from "../../Data/PostData";
import Post from "../Post/Post";
const Posts = () => {
  return (
    <div className="posts">
      {PostData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
