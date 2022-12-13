import React from "react";
import { Link } from "react-router-dom";

function AddNewFriends({ user }) {
  return (
    <Link to={`/user/${user._id}`}>
      <div className="friendsGroup">
        <img
          src={user.imageprofile}
          alt={user.username}
          className="friendsImg"
        />
        <p className="friendsName">{user.username}</p>
        <button>Add friend</button>
      </div>
    </Link>
  );
}

export default AddNewFriends;
