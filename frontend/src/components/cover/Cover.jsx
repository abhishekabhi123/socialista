import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cover() {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    const getFriends = async () => {
      try {
        const resultPosts = await axios.get(`/api/users/${userInfo._id}`);
        setUsers(resultPosts.data);
        // console.log(resultPosts.data);

        const myFriends = await axios.get("/api/users/friends/" + users._id);
        setFriends(myFriends.data);
        console.log(myFriends.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [userInfo._id, users._id]);
  return (
    <div className="accountDiv">
      <div className="accountCover">
        <img src={userInfo.imagecover} alt={userInfo.username} />
      </div>
      <div className="accountInfo">
        <div className="accountInfoLeft">
          <img src={userInfo.imageprofile} alt={userInfo.username} />
        </div>
        <div className="accountInfoRight">
          <h2 className="userName">{userInfo.username}</h2>
          <span className="userFriends">Friends:{friends.length}</span>
          <div className="friends">
            {friends.length === 0 ? (
              <span> No Friends..</span>
            ) : (
              <>
                {friends?.slice(-4).map((friend) => (
                  <Link to={`/user/${friend._id}`} key={friend._id}>
                    <img src={friend.imageprofile} alt={friend.username} />
                  </Link>
                ))}
                <span className="dots">...</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cover;
