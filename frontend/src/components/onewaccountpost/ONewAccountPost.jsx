import React from "react";
import { posts } from "../../data";
import ONewSinlgeAccountPost from "../onewsingleaccountpost/ONewSinlgeAccountPost";

function ONewAccountPost() {
  return (
    <div className="nAPost">
      <div className="nAShareDiv">
        {posts.map((post) => (
          <ONewSinlgeAccountPost post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default ONewAccountPost;
