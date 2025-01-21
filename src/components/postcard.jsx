import React from "react";
import LikeButton from "./likebutton";
import "./postcard.css";

const postCard = ({ profileImage, username, content, isLiked }) => {
  return (
    <div className="post-card">
      <img src={profileImage} alt="post cover" />
      <p>{username}</p>
      <p>{content}</p>
      <LikeButton isLiked={isLiked} />
    </div>
  );
};

export default postCard;
