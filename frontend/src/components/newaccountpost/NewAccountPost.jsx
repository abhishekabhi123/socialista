import React from "react";
import Share from "../share/Share";
import { posts } from "../../data";
import NewSingleAccountPost from "../newsingleaccountpost/NewSingleAccountPost";

function NewAccountPost() {
  return (
    <div className="nAPost">
      <div className="nAShareDiv">
        <Share />
        {posts.map((post) => (
          <NewSingleAccountPost post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default NewAccountPost;
