import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBook,
  faEye,
  faPhotoFilm,
  faShop,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarGroups">
        <div className="sidebarGroup">
          <Link to="/account" className="sidebarLink">
            <img
              src="./assets/images/user/user.png"
              alt=""
              className="currentUserImage"
            />
            <span className=" currentUserName">Abhi</span>
          </Link>
        </div>
        <div className="sidebarGroup">
          <FontAwesomeIcon icon={faUser} />
          <Link to="/friends" className="SubTitle">
            Friends
          </Link>
        </div>
        <div className="sidebarGroup">
          <FontAwesomeIcon icon={faUserGroup} />
          <Link to="/groups" className="SubTitle">
            Groups
          </Link>
        </div>
        <div className="sidebarGroup">
          <FontAwesomeIcon icon={faShop} />
          <Link to="/marketplace" className="SubTitle">
            Marketplace
          </Link>
        </div>
        <div className="sidebarGroup">
          <FontAwesomeIcon icon={faEye} />
          <Link to="/watch" className="SubTitle">
            Watch
          </Link>
        </div>
        <div className="sidebarGroup">
          <FontAwesomeIcon icon={faBook} />
          <Link to="/pages" className="SubTitle">
            Pages
          </Link>
        </div>
        <div className="sidebarGroup">
          <FontAwesomeIcon icon={faPhotoFilm} />
          <Link to="/memories" className="SubTitle">
            Memories
          </Link>
        </div>
        <hr className="hr" />
        <div className="sidebarGroup">
          <FontAwesomeIcon icon={faArrowDown} />
          <button>Click for more</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
