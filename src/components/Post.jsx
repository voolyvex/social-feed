/* Create a template of how you would like each individual post to be displayed. This will include the user’s name, the body of the post, and the “like” and “dislike” buttons. */
import React, { useEffect, useState } from "react";
import BulbButton from "./Buttons/BulbButton"
import BombButton from "./Buttons/BombButton";
import "../index.css"


const Post = ({post}) => {
    

     return (
        <div className="post-container">
            <h2 className="user-name">{post.name}</h2>
            <h4>{post.post}</h4>
            <div className="like-buttons">
                <BulbButton/>
                <BombButton/>
            </div>
        </div>
     )
}
export default Post;
