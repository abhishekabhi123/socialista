import React from "react";

function OOnlinefriends({ user }) {
  return (
    <div className="onlineGroup">
      <div className="onlineGroupLeft">
        <img
          src={`../${user.profileImg}`}
          alt="userimage"
          className="onlineUserImage"
        />
        <div className="onlineBadge"></div>
      </div>
      <div className="onlineGroupRight">
        <span className="onlineUserName">{user.username}</span>
      </div>
    </div>
  );
}

export default OOnlinefriends;
