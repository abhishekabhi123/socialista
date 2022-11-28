import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./story.css";

function Story() {
  return (
    <div className="story">
      <Tabs>
        <TabList>
          <Tab>Story</Tab>
          <Tab>Reels</Tab>
          <Tab>Rooms</Tab>
        </TabList>

        <TabPanel>
          <div className="storyGroups">
            <div className="storyGroup">
              <div className="storyCard">
                <label htmlFor="add">
                  <div className="storyBody">
                    <img src="./assets/images/user/user.png" alt="" />
                  </div>
                  <div className="storyFooter">
                    <FontAwesomeIcon icon={faAdd} />
                    <h4 className="storyTitle">Create a story</h4>
                  </div>
                </label>
                <input type="file" name="" id="add" className="hidden" />
              </div>
            </div>
            <div className="storyGroup">
              <div className="storyDiv">
                <div className="storyUserAddImgDiv">
                  {
                    <img
                      src="./assets/images/user/storyuser.jpg"
                      className="storyUserAddImg"
                      alt=""
                    />
                  }
                </div>
                <div className="storyUser">
                  <img src="./assets/images/user/story.jpg" alt="" />
                </div>
                <div className="storyUserTitle">
                  <h5>Your story</h5>
                </div>
              </div>
            </div>
            <div className="storyGroup">
              <div className="storyDiv">
                <div className="storyUserAddImgDiv">
                  {
                    <img
                      src="./assets/images/user/storyuser.jpg"
                      className="storyUserAddImg"
                      alt=""
                    />
                  }
                </div>
                <div className="storyUser">
                  <img src="./assets/images/user/story.jpg" alt="" />
                </div>
                <div className="storyUserTitle">
                  <h5>Your story</h5>
                </div>
              </div>
            </div>{" "}
            <div className="storyGroup">
              <div className="storyDiv">
                <div className="storyUserAddImgDiv">
                  {
                    <img
                      src="./assets/images/user/storyuser.jpg"
                      className="storyUserAddImg"
                      alt=""
                    />
                  }
                </div>
                <div className="storyUser">
                  <img src="./assets/images/user/story.jpg" alt="" />
                </div>
                <div className="storyUserTitle">
                  <h5>Your story</h5>
                </div>
              </div>
            </div>{" "}
            <div className="storyGroup">
              <div className="storyDiv">
                <div className="storyUserAddImgDiv">
                  {
                    <img
                      src="./assets/images/user/storyuser.jpg"
                      className="storyUserAddImg"
                      alt=""
                    />
                  }
                </div>
                <div className="storyUser">
                  <img src="./assets/images/user/story.jpg" alt="" />
                </div>
                <div className="storyUserTitle">
                  <h5>Your story</h5>
                </div>
              </div>
            </div>{" "}
            <div className="storyGroup">
              <div className="storyDiv">
                <div className="storyUserAddImgDiv">
                  {
                    <img
                      src="./assets/images/user/storyuser.jpg"
                      className="storyUserAddImg"
                      alt=""
                    />
                  }
                </div>
                <div className="storyUser">
                  <img src="./assets/images/user/story.jpg" alt="" />
                </div>
                <div className="storyUserTitle">
                  <h5>Your story</h5>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Story;
