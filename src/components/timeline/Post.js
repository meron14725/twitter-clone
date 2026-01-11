import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./Post.css";
import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post_headerText">
            <h3>
              プログラミングチュートリアル
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />
                @user_id
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Reactなう。</p>
          </div>
        </div>
        <img src="https://picsum.photos/1920/1080" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
