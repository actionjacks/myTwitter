import React from "react";
import "../styles/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>feed</h2>
      </div>
      <TweetBox />
      <Post />
    </div>
  );
}

export default Feed;
