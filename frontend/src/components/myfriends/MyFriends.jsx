import React from "react";
import { Link } from "react-router-dom";

function MyFriends({ friend }) {
  return (
    <Link to={`/user/${friend._id}`}>
      <div className="friendsGroup">
        <img
          src={friend.imageprofile}
          alt={friend.username}
          className="friendsImg"
        />
        <p className="friendsName">{friend.username}</p>
        <button>Delete friend</button>
      </div>
    </Link>
  );
}

export default MyFriends;
