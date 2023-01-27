/* Create a template of how you would like each individual post to be displayed. This will include the user’s name, the body of the post, and the “like” and “dislike” buttons. */

import React, {useState} from "react";

const AddPost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [date, setDate] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        
        let newEntry = {
           name: name,
           post: post,
           date: date 
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    return (  
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='name' value= {name} onChange={(e) => setName(e.target.value)} />
            <label>Post</label>
            <input type='post' value= {post} onChange={(e) => setPost(e.target.value)} />
            <label>Date</label>
            <input type='date' value= {date} onChange={(e) => setDate(e.target.value)} />
            <button type='submit'>Post</button>
        </form>
    );
}
export default AddPost;
