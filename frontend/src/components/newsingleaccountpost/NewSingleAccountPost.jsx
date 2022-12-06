import React, { useState } from "react";
import { users } from "../../data";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./newsingleaccountpost.css";

function NewSingleAccountPost({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked); //**To like and unlike. Set false to like and true to unlike */
  };
  return (
    <div className="nsap">
      <div className="nsapGroups">
        <div className="nsapGroup">
          <div className="nsapCardHeader">
            <div className="nsapCardHeaderLeft">
              <img
                src={
                  users.filter((user) => user.id === post?.userId)[0].profileImg
                }
                alt=""
                className="nsapUserImg"
              />
              <div className="nsapInfo">
                <span className="nsapUserName">
                  {users.filter((user) => user.id === post?.userId)[0].username}
                </span>
                <span className="nsapDate">{post.date}</span>
              </div>
            </div>
            <div className="nsapCardHeaderRight">
              <FontAwesomeIcon icon={"ellipsis"} />
            </div>
          </div>
          <div className="nsapCardBody">
            <p className="nsapText">{post.description}</p>
            <img src={post?.image} alt="" className="nsapImg" />
          </div>
          <div className="nsapCardFooter">
            <div className="nsapCardFooterLeft">
              {isLiked ? (
                <>
                  <img
                    src="./assets/images/icons/thumb-down.png"
                    alt=""
                    className="nsapIconsImg"
                    onClick={likeHandler}
                  />
                  <img
                    src="./assets/images/icons/like.png"
                    alt=""
                    className="nsapIconsImg"
                    onClick={likeHandler}
                  />
                </>
              ) : (
                <Fragment>
                  <img
                    src="./assets/images/icons/thumb-up.png"
                    alt=""
                    className="nsapIconsImg"
                    onClick={likeHandler}
                  />
                  <img
                    src="./assets/images/icons/heart.png"
                    alt=""
                    className="nsapIconsImg"
                    onClick={likeHandler}
                  />
                </Fragment>
              )}

              <span className="nsapCounter">{like} People like it</span>
            </div>
            <div className="nsapCardFooterRight">
              <div className="nsapComments">{post.comment} Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSingleAccountPost;
