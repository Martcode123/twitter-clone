import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'Richard Martins',
      username: 'Martins',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweet__box">
      <form>
        <div className="tweet__box--input">
          <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweet__box--img__input"
          placeholder="Optional: Enter image Url"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweet__box--btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
