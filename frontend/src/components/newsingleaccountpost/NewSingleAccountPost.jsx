import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./newsingleaccountpost.css";
import axios from "axios";
import { format } from "timeago.js";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function NewSingleAccountPost({ post }) {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [isLiked, setIsLiked] = useState(false);
  const [users, setUsers] = useState({});
  const [like, setLike] = useState(post.likes.length);

  useEffect(() => {
    setIsLiked(post.likes.includes(userInfo._id));
  }, [post.likes, userInfo._id]);

  const likeHandler = () => {
    try {
      axios.put("/api/posts/" + post._id + "/like", { userId: userInfo._id });
    } catch (error) {}

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked); //**To like and unlike. Set false to like and true to unlike */
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const resultPosts = await axios.get(`/api/users/${userInfo._id}`);
      setUsers(resultPosts.data);
      console.log(resultPosts.data);
    };
    fetchUsers();
  }, [userInfo._id]);

  return (
    <div className="nsap">
      <div className="nsapGroups">
        <div className="nsapGroup">
          <div className="nsapCardHeader">
            <div className="nsapCardHeaderLeft">
              <img
                src={users.imageprofile}
                alt={users.username}
                className="nsapUserImg"
              />
              <div className="nsapInfo">
                <span className="nsapUserName">{users.username}</span>
                <span className="nsapDate">{format(post.createdAt)}</span>
              </div>
            </div>
            <div className="nsapCardHeaderRight">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <div className="nsapCardBody">
            <p className="nsapText">{post?.description}</p>
            <img
              src={`./assets/images/upload/${post?.image}`}
              alt=""
              className="nsapImg"
            />
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
