import React from "react";
import { Link } from "react-router-dom";

function AddNewFriends({ user }) {
  return (
    <Link to="/user/:1234567">
      <div className="friendsGroup">
        <img src={user.profileImg} alt={user.username} className="friendsImg" />
        <p className="friendsName">{user.username}</p>
        <button>Add friend</button>
      </div>
    </Link>
  );
}

export default AddNewFriends;
