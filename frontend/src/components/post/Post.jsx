import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { users } from "../../data";
import React, { Fragment } from "react";
import { useState } from "react";
import "./post.css";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked); //**To like and unlike. Set false to like and true to unlike */
  };

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
              {isLiked ? (
                <Fragment>
                  <img
                    src="./assets/images/icons/thumb-down.png"
                    alt=""
                    className="postIconsImg"
                    onClick={likeHandler}
                  />{" "}
                  <img
                    src="./assets/images/icons/like.png"
                    alt=""
                    className="postIconsImg"
                    onClick={likeHandler}
                  />
                </Fragment>
              ) : (
                <Fragment>
                  <img
                    src="./assets/images/icons/thumb-up.png"
                    alt=""
                    className="postIconsImg"
                    onClick={likeHandler}
                  />
                  <img
                    src="./assets/images/icons/heart.png"
                    alt=""
                    className="postIconsImg"
                    onClick={likeHandler}
                  />
                </Fragment>
              )}

              <span className="postCounter">{like} People like it</span>
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
