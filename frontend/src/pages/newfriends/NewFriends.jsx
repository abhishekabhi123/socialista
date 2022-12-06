import React from "react";
import "./newfriends.css";
import Top from "../../components/top/Top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { users } from "../../data";
import AddNewFriends from "../../components/addnewfriends/AddNewFriends";
import Footer from "../../components/footer/Footer";

function NewFriends() {
  return (
    <>
      <Top />
      <div className="mainDiv">
        <div className="friends">
          <div className="friendsTop">
            <h3 className="friendsTitle">All Friends</h3>
            <div className="topSearch">
              <input type="text" placeholder="search" />
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className="friendsMiddle">
            <div className="friendsGroups">
              {users.map((user) => (
                <AddNewFriends key={user.id} user={user} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewFriends;
