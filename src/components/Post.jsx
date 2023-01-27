/* Create a template of how you would like each individual post to be displayed. This will include the user’s name, the body of the post, and the “like” and “dislike” buttons. */

import React, {useState} from "react";
import { BiBomb } from "react-icons/bi";
import LikeDislikeButton from "./Buttons"

const Post = ({post}) => {

     return (
        <div>
            <h1>
                {post.name}
            </h1>
            <button>like</button>
            <LikeDislikeButton/>
            <BiBomb/>
        </div>
     )
}
export default Post;
