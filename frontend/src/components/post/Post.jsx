import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

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
              <div className="postInfo">
                <span className="postUserName">Abhi </span>
                <span className="postDate">2 mins ago.</span>
              </div>
            </div>
            <div className="postCardHeaderRight">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <div className="postCardBody">
            <p className="postText">My city💕</p>
            <img
              src="./assets/images/post/paris.jpg"
              alt=""
              className="postImg"
            />
          </div>
          <div className="postCardFooter">
            <div className="postCardFooterLeft">
              <img
                src="./assets/images/icons/thumb-up.png"
                alt=""
                className="postIconsImg"
              />
              <img
                src="./assets/images/icons/heart.png"
                alt=""
                className="postIconsImg"
              />
              <span className="postCounter">5 People like it</span>
            </div>
            <div className="postCardFooterRight">
              <div className="postComments">0 Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
