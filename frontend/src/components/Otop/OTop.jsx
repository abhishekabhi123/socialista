import {
  faBell,
  faMessage,
  faPerson,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function OTop() {
  return (
    <div className="top">
      <div className="topLeft">
        <h2 className="logo">
          <Link to="/"> Socialista </Link>
        </h2>
        <div className="topSearch">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="topMiddle">
        <div className="topLinks">
          <ul>
            <li>
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/friends" activeclassname="active">
                Friends
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="topRight">
        <div className="notifications">
          <div className="notification">
            <FontAwesomeIcon icon={faPerson} />
            <span className="badge">1</span>
          </div>
          <div className="notification">
            <FontAwesomeIcon icon={faMessage} />
            <span className="badge">1</span>
          </div>
          <div className="notification">
            <FontAwesomeIcon icon={faBell} />
            <span className="badge">1</span>
          </div>
        </div>
        <div className="user">
          <Link to="/account">
            <img
              src="./assets/images/user/user.png"
              alt=""
              className="userImage"
            />
          </Link>
          <span className="userLogout" onClick={logout}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default OTop;
