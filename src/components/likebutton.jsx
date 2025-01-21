import React, { useState } from "react";

const LikeButton = ({ isLiked }) => {
  const [lkd, setLkd] = useState(isLiked);
  return (
    <button
      className={`like-button ${lkd ? "liked" : ""}`}
      onClick={() => setLkd(!lkd)}
    >
      {lkd ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
