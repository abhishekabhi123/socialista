import React from "react";

function Cover() {
  return (
    <div className="accountDiv">
      <div className="accountCover">
        <img src="./assets/images/account/account.jpg" alt="" />
      </div>
      <div className="accountInfo">
        <div className="accountInfoLeft">
          <img src="./assets/images/user/abhi.jpg" alt="" />
        </div>
        <div className="accountInfoRight">
          <h3 className="userName">Abhi</h3>
          <span className="userFriends">Friends:6</span>
          <div className="friends">
            <img src="./assets/images/user/user2.jpg" alt="" />
            <img src="./assets/images/user/user3.jpg" alt="" />
            <img src="./assets/images/user/user4.jpg" alt="" />
            <img src="./assets/images/user/user5.jpg" alt="" />
            <div className="dots">...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
