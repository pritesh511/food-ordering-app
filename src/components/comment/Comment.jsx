import React from "react";
import "./comment.css";

const Comment = ({ data }) => {
  return (
    <div className="comment-wrapper">
      <img
        className="user-icon-image"
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <div className="comment-para">
        <p style={{ fontWeight: "bold" }}>{data.name}</p>
        <p>{data.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
