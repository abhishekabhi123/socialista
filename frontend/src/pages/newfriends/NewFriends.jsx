import React, { useEffect, useState } from "react";
import "./newfriends.css";
import Top from "../../components/top/Top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AddNewFriends from "../../components/addnewfriends/AddNewFriends";
import Footer from "../../components/footer/Footer";
import axios from "axios";

function NewFriends() {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const resultUsers = await axios.get("/api/users/");
        setUsers(resultUsers.data);
        console.log("users are", resultUsers.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

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
              {users.length === 0 ? (
                <h3 className="noFriends">
                  There are no currently no registered users
                </h3>
              ) : (
                users?.map(
                  (user) =>
                    userInfo._id !== user._id && (
                      <AddNewFriends key={user._id} user={user} />
                    )
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewFriends;
