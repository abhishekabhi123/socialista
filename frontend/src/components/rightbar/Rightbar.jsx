import React from "react";
import { users } from "../../data";
import OnlineFriends from "../onlinefriends/OnlineFriends";
import "./rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <h4 className="online">Online Friends</h4>
      <div className="onlineGroups">
        {users.map((user) => (
          <OnlineFriends user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default Rightbar;
