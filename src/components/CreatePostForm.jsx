/* In the CreatePostForm component create a form with 2 input fields. There should be an input field for the user’s name, and one for the body of their post. Each input field should be bound to its own state variable.*/
/* Implement a handleSubmit method for your form, which should pass the entered values to a function on the App.jsx component. That function should create a new post object, add it to the existing array of posts, and update the App.js state variable with the new array. */

import React, { useState } from 'react';
import "../index.css"

const CreatePostForm = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [date, setDate] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        
        let newPost = {
            name: name,
            post: post,
            date: date 
         };
        props.addNewPostItem(newPost);
    }
    return (  
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>Name </label>
                <input type='name' maxlength='25'value= {name} onChange={(e) => setName(e.target.value)} />
                <label> Post </label>
                <input type='post' maxlength='300' value= {post} onChange={(e) => setPost(e.target.value)} />
                <label> Date </label>
                <input type='date' value= {date} onChange={(e) => setDate(e.target.value)} />
            </form>
            <button className='post-button' type='submit'>Post</button>
        </div>
    );
}
 
export default CreatePostForm;