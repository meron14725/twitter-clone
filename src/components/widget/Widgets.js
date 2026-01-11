import { Search } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";
import { Tweet } from "react-tweet";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>いまどうしてる？</h2>
        {/* ライブラリを追加 */}
        <div className="tweet-container">
          <Tweet id="2009960257758572891" />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
