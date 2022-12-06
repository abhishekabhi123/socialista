import React from "react";
import { users } from "../../data";

function NewStory({ s }) {
  return (
    <div className="storyGroup">
      <div className="storyDiv">
        <div className="storyUserAddImgDiv">
          <img
            src={users.filter((user) => user.id === s?.userId[0]).profileImg}
            className="storyUserAddImg"
            alt=""
          />
        </div>
        <div className="storyUser">
          <img src={s.image} alt="" />
        </div>
        <div className="storyUserTitle">
          <h5>{users.filter((user) => user.id === s?.userId)[0].username}</h5>
        </div>
      </div>
    </div>
  );
}

export default NewStory;
