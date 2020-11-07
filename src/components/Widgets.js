import React from "react";
import "../styles/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Whats happening</h2>
        <TwitterTweetEmbed tweetId={"1325138414040207361"} />
        <TwitterTweetEmbed tweetId={"1325031375502761984"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="jacklagoda"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/jaxoo.jack"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
