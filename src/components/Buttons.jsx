import React, { useState } from "react";


const LikeDislikeButton = (props) => {

  const [likeButton, setLikeButton] = useState("inactive");
  const [dislikeButton, setDislikeButton] = useState("inactive");
  
  function handleClickLike(){
      if(likeButton === "inactive"){
        setLikeButton("active")
      setDislikeButton("inactive")
      }}
  
  function handleClickDislike(){
      if(dislikeButton === "inactive"){
          setDislikeButton("active")
      setLikeButton("inactive");
      }}

  return (
    <div className="post-buttons">
    <div>
      <button onClick={handleClickLike}>
      <img src="../resources/12_generated.jpg" alt="lightbulb button"/>
      </button>
    </div>
    <div>
      <button onClick={handleClickDislike}>
        <img src="../resources/12_generated.jpg" alt="lightbulb button"/>
      </button>
    </div>
  </div>
);
};
export default LikeDislikeButton;
