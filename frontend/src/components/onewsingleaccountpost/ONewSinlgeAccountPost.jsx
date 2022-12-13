import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "timeago.js";

function ONewSinlgeAccountPost({ post }) {
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/")[2];
  console.log(id);

  const [user, setUser] = useState([]);

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(post.likes.includes(id));
  }, [id, post.likes]);

  const likeHandler = () => {
    try {
      axios.put("/api/posts/" + post._id + "/like", { userId: id });
    } catch (error) {}

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked); //**To like and unlike. Set false to like and true to unlike */
  };
  useEffect(() => {
    const fetchUser = async () => {
      const resultPosts = await axios.get(`/api/users/${id}`);
      setUser(resultPosts.data);
      console.log(resultPosts.data);
    };
    fetchUser();
  }, [id]);
  return (
    <div className="nsap">
      <div className="nsapGroups">
        <div className="nsapGroup">
          <div className="nsapCardHeader">
            <div className="nsapCardHeaderLeft">
              <img
                src={`../${user.imageprofile}`}
                alt={user.username}
                className="nsapUserImg"
              />
              <div className="nsapInfo">
                <span className="nsapUserName">{user.username}</span>
                <span className="nsapDate">{format(post.createdAt)}</span>
              </div>
            </div>
            <div className="nsapCardHeaderRight">
              <FontAwesomeIcon icon={"ellipsis"} />
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
                    src="../assets/images/icons/thumb-down.png"
                    alt=""
                    className="nsapIconsImg"
                    onClick={likeHandler}
                  />
                  <img
                    src="../assets/images/icons/like.png"
                    alt=""
                    className="nsapIconsImg"
                    onClick={likeHandler}
                  />
                </>
              ) : (
                <Fragment>
                  <img
                    src="../assets/images/icons/thumb-up.png"
                    alt=""
                    className="nsapIconsImg"
                    onClick={likeHandler}
                  />
                  <img
                    src="../assets/images/icons/heart.png"
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

export default ONewSinlgeAccountPost;
