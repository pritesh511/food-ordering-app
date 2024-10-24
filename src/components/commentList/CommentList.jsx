import React from "react";
import Comment from "../comment/Comment";

const CommentList = ({ commentData }) => {
  return (
    <>
      {commentData.map((comment, index) => {
        return (
          <div key={index} style={{ padding: "6px"}}>
            <Comment data={comment} />
            <div className="nested-comment">
              <CommentList commentData={comment.replies}/>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentList;