import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import {
  addDoc,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import db from "../../firebase.js";

function TweetBox() {
  const avatar = "/broken-image.jpg";
  const displayName = "プログラミングチュートリアル";
  const userName = "user_id";
  const verified = true;

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const postCollection = collection(db, "posts");

  const sendTweet = (e) => {
    // firebaseのDBにデータを追加する
    e.preventDefault();
    addDoc(postCollection, {
      avatar: avatar,
      displayName: displayName,
      image: tweetImage,
      text: tweetMessage,
      userName: userName,
      verified: verified,
      timestamp: serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={avatar}></Avatar>
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          variant="outlined"
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
