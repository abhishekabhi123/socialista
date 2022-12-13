import {
  faBell,
  faMessage,
  faPerson,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function OTop() {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    toast.success("Successfully logged out");
    navigate("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/login");
    }
  }, [navigate]);

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
            {userInfo && (
              <li>
                <NavLink to="/friends" activeclassname="active">
                  Friends
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="topRight">
        {userInfo && (
          <>
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
          </>
        )}
        <div className="user">
          {userInfo ? (
            <>
              <Link to="/account">
                <img
                  src={`../${userInfo.imageprofile}`}
                  alt=""
                  className="userImage"
                />
              </Link>
              <span className="userLogout" onClick={logoutHandler}>
                Logout
              </span>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default OTop;
