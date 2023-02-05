import React, { useState } from "react";
import "../Style/TweetBox.css";
import { Avatar, Button } from "@mui/material"; //Buttons API
import db from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "Piyush Kumar",
      username: "pysh",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://avatars.githubusercontent.com/u/74560941?s=400&u=7f891648d1a351ae0dd2c7cee80f3dc130f9f1c9&v=4",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar
            src=" https://avatars.githubusercontent.com/u/74560941?s=400&u=7f891648d1a351ae0dd2c7cee80f3dc130f9f1c9&v=4"
            sx={{ width: 56, height: 56 }}
          />
          <input
            style={{ maxlength: "1" }}
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening ?"
            type="text"
          />
        </div>
        <div style={{ display: "flex" }}>
          <InsertPhotoIcon className="tweetBox_imageIcon" />
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox_imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
          />
        </div>
        <Button
          size="large"
          onClick={sendTweet}
          type="submit"
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
