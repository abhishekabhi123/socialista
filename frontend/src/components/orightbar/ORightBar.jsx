import React from "react";
import { users } from "../../data";
import OOnlinefriends from "../oonlinefriends/OOnlinefriends";

function ORightBar() {
  return (
    <div className="rightbar">
      <h4 className="online">Online Friends</h4>
      <div className="onlineGroups">
        {users.map((user) => (
          <OOnlinefriends user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default ORightBar;
