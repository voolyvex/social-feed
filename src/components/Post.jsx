/* Create a template of how you would like each individual post to be displayed. This will include the user’s name, the body of the post, and the “like” and “dislike” buttons. */

import React, {useState} from "react";

import LikeDislikeButton from "./Buttons"


const Post = ({post}) => {

     return (
        <div>
            <h1>{post.name}</h1>
            <h2>{post.post}</h2>
            {/* <button>like</button>
            <HiOutlineLightBulb/>
            <button>dislike</button>
            <BiBomb/> */}
            <LikeDislikeButton/>
        </div>
     )
}
export default Post;
