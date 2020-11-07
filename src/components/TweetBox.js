import React from "react";
import "../styles/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn-lubimyczytac.pl/upload/authors/57588/495160-352x500.jpg" />
          <input placeholder="you want to tweet?" />
        </div>
        <input className="tweetBox__inputImage" placeholder="enter image url" />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
