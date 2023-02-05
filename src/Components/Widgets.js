import React from "react";
import "../Style/Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1620254052746690560"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SpaceX"
          options={{ height: 400 }}
        />
        <TwitterTweetEmbed tweetId={"1618542564638068738"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Piyush_kmar"
          options={{ height: 400 }}
        />
        <TwitterTweetEmbed tweetId={"1619899152019906562"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/saurabhnemade"}
          options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
