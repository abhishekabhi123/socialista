import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <div className="postGroups">
        <div className="postGroup">
          <div className="postCardHeader">
            <div className="postCardHeaderLeft">
              <img
                src="./assets/images/user/abhi.jpg"
                alt=""
                className="postUserImg"
              />
              <span className="postUserName">Abhi</span>
              <span className="postDate">2 mins ago.</span>
            </div>
            <div className="postHeaderRight"></div>
          </div>
          <div className="postCardBody"></div>
          <div className="postCardFooter"></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
