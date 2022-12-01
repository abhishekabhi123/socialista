import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { users } from "../../data";
import React from "react";
import "./post.css";

function Post({ post }) {
  return (
    <div className="post">
      <div className="postGroups">
        <div className="postGroup">
          <div className="postCardHeader">
            <div className="postCardHeaderLeft">
              <img
                src={
                  users.filter((user) => user.id === post?.userId)[0].profileImg
                }
                alt=""
                className="postUserImg"
              />
              <div className="postInfo">
                <span className="postUserName">
                  {users.filter((user) => user.id === post?.userId)[0].username}
                </span>
                <span className="postDate">{post.date}</span>
              </div>
            </div>
            <div className="postCardHeaderRight">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <div className="postCardBody">
            <p className="postText">{post.description}</p>
            <img src={post?.image} alt="" className="postImg" />
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
              <span className="postCounter">{post.like} People like it</span>
            </div>
            <div className="postCardFooterRight">
              <div className="postComments">{post.comment} Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
