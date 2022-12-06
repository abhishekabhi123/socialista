import React from "react";
import { Link } from "react-router-dom";

function MyFriends({ user }) {
  return (
    <Link to="/user/:1234567">
      <div className="friendsGroup">
        <img src={user.profileImg} alt={user.username} className="friendsImg" />
        <p className="friendsName">{user.username}</p>
        <button>Delete friend</button>
      </div>
    </Link>
  );
}

export default MyFriends;
