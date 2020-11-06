import React from "react";
import "../styles/Feed.css";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>feed</h2>
      </div>
      <TweetBox />
    </div>
  );
}

export default Feed;
