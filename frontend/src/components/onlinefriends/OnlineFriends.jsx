import React from "react";
import { Link } from "react-router-dom";

function OnlineFriends({ user }) {
  return (
    <Link to={`/user/${user._id}`}>
      <div className="onlineGroup">
        <div className="onlineGroupLeft">
          <img
            src={user.imageprofile}
            alt="userimage"
            className="onlineUserImage"
          />
          <div className="onlineBadge"></div>
        </div>
        <div className="onlineGroupRight">
          <span className="onlineUserName">{user.username}</span>
        </div>
      </div>
    </Link>
  );
}

export default OnlineFriends;
