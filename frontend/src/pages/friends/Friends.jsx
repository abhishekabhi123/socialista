import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Top from "../../components/top/Top";
import "./friends.css";
import MyFriends from "../../components/myfriends/MyFriends";
import axios from "axios";

function Friends() {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    const getFriends = async () => {
      try {
        const resultPosts = await axios.get(`/api/users/${userInfo._id}`);
        setUsers(resultPosts.data);
        // console.log(resultPosts.data);

        const myFriends = await axios.get("/api/users/friends/" + users._id);
        setFriends(myFriends.data);
        console.log(myFriends.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [userInfo._id, users._id]);
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
              {friends.length === 0 ? (
                <h3 className="noFriends">You don't have any friends</h3>
              ) : (
                friends?.map((friend) => (
                  <MyFriends key={friend.id} friend={friend} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Friends;
