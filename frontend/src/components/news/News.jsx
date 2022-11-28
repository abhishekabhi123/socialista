import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import Story from "../story/Story";
import "./news.css";

function News() {
  return (
    <div className="news">
      <Story />
      <Share />
      <Post />
    </div>
  );
}

export default News;
