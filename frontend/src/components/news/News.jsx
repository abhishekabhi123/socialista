import React from "react";
import Share from "../share/Share";
import Story from "../story/Story";
import "./news.css";

function News() {
  return (
    <div className="news">
      <Story />
      <Share />
    </div>
  );
}

export default News;
