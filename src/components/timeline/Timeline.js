import React, { useEffect, useState } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase.js";
import { collection, getDocs, doc } from "firebase/firestore";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsData = collection(db, "posts");
    getDocs(postsData).then((querySnapshots) => {
      setPosts(
        querySnapshots.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="プログラミングチュートリアル"
        userName="user_id"
        verified={true}
        text="初めてのツイート"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://picsum.photos/1920/1080"
      />

      {posts.map((post) => (
        <Post
          key={post.id} // 各リストアイテムには一意のkeyが必要です
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Timeline;
