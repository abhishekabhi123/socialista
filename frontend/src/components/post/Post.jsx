import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useState } from "react";
import "./post.css";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

function Post({ post }) {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [users, setUsers] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

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
      const resultPosts = await axios.get(`/api/users/${post.userId}`);
      setUsers(resultPosts.data);
      console.log(resultPosts.data);
    };
    fetchUsers();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postGroups">
        <div className="postGroup">
          <div className="postCardHeader">
            <div className="postCardHeaderLeft">
              {userInfo ? (
                <Link to={`/account`}>
                  <img
                    src={users.imageprofile}
                    alt=""
                    className="postUserImg"
                  />
                </Link>
              ) : (
                <Link to={`/users/${users.username}`}>
                  <img
                    src={users.imageprofile}
                    alt=""
                    className="postUserImg"
                  />
                </Link>
              )}
              <div className="postInfo">
                <span className="postUserName">{users.username}</span>
                <span className="postDate">{format(post.createdAt)}</span>
              </div>
            </div>
            <div className="postCardHeaderRight">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <div className="postCardBody">
            <p className="postText">{post?.description}</p>
            <img
              src={`./assets/images/upload/${post?.image}`}
              alt=""
              className="postImg"
            />
          </div>
          <div className="postCardFooter">
            <div className="postCardFooterLeft">
              {isLiked ? (
                <>
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
                </>
              ) : (
                <>
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
                </>
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
