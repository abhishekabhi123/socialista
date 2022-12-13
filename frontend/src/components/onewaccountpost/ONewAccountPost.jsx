import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ONewSinlgeAccountPost from "../onewsingleaccountpost/ONewSinlgeAccountPost";

function ONewAccountPost() {
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/")[2];
  console.log(id);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resultPosts = await axios.get(`/api/posts/all/${id}`);
      setPosts(
        resultPosts.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      );
      console.log(resultPosts.data);
    };
    fetchPosts();
  }, [id]);

  return (
    <div className="nAPost">
      <div className="nAShareDiv">
        {posts?.length === 0 ? (
          <h3 className="noFriends">This user hasn't posted anything</h3>
        ) : (
          posts.map((post) => (
            <ONewSinlgeAccountPost post={post} key={post._id} />
          ))
        )}
      </div>
    </div>
  );
}

export default ONewAccountPost;
