import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function OCover() {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/")[2];
  console.log(id);

  const [user, setUser] = useState([]);
  const [followed, setFollowed] = useState(
    userInfo.followings.includes(user?.id)
  );

  useEffect(() => {
    setFollowed(userInfo.followings.includes(user?.id));
  }, [userInfo.followings, user.id]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await axios.get("/api/users/" + id);
        setUser(userData.data);
        console.log(userData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [id]);

  const followHandler = async () => {
    try {
      if (followed) {
        await axios.put("/api/users/" + user._id + "/follow", {
          userId: userInfo._id,
        });
      } else {
        await axios.put("/api/users/" + user._id + "/unfollow", {
          userId: userInfo._id,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };

  return (
    <div className="accountDiv">
      <div className="accountCover">
        <img src={`../${user.imagecover}`} alt={user.userName} />
      </div>
      <div className="accountInfo">
        <div className="accountInfoLeft">
          <img src={`../${user.imageprofile}`} alt={user.userName} />
        </div>
        <div className="accountInfoRight">
          <h3 className="userName">{user.username}</h3>
          <span className="userFriends">Friends:{user.followings?.length}</span>
          <div className="friends">
            {user.followings?.length === 0 ? (
              <span>No friends</span>
            ) : (
              <>
                <img src="../assets/images/user/user2.jpg" alt="" />
                <img src="../assets/images/user/user3.jpg" alt="" />
                <img src="../assets/images/user/user4.jpg" alt="" />
                <img src="../assets/images/user/user5.jpg" alt="" />
                <span className="dots">...</span>
              </>
            )}
          </div>
          <button className="unfriend" onClick={followHandler}>
            {followed ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OCover;
