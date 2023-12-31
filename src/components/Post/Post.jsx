import React from "react";
import "./post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
const Post = ({ data }) => {
  return (
    <div className="post">
      <img src={data.img} alt="PostImage" />
      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="LikeImage" />
        <img src={Comment} alt="CommentImage" />
        <img src={Share} alt="ShareImage" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
          <span>{data.desc}</span>
        </span>
      </div>
    </div>
  );
};

export default Post;
