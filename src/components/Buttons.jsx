import React, { useState } from "react";
import { BiBomb } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import "../index.css"

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
      <HiOutlineLightBulb className ="active"  />
      </button>
    </div>
    <div>
      <button onClick={handleClickDislike}>
        <BiBomb className= "inactive" />
      </button>
    </div>
  </div>
);
};
export default LikeDislikeButton;
