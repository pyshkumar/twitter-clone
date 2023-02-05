import React, { useEffect, useState } from "react";
import "../Style/Feed.css";
import TweetBox from "./TweetBox";
import db from "../firebase.js";
import Post from "./Post";
import { getDocs, collection } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { docs } = await getDocs(collection(db, "posts"));
      setPosts(docs.map((elem) => ({ ...elem.data(), id: elem.id })));
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="feed">
      <div classname="feed_header">
        <h2 style={{ "padding-left": "7px" }}>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
