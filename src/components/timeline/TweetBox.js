import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="/broken-image.jpg"></Avatar>
          <input placeholder="いまどうしてる？" type="text"></input>
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
        ></input>
        <Button
          variant="outlined"
          className="tweetBox__tweetButton"
          type="submit"
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
