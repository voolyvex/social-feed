import React, { useState } from 'react';
import PostPresenter from './components/PostList';
import CreatePostForm from './components/CreatePostForm';
import './index.css';

function App() {

  const [posts, setPosts] = useState([{name:"alek", post:"yoo\ngreetings from vienna", date:"01-19-2023"}, {name:"hootie", post:"Everything is awesome: Don't forget the Lego - Tagg - 2019 - Journal of Paediatrics and Child Health - Wiley Online Library\nhttps://onlinelibrary.wiley.com/doi/full/10.1111/jpc.14309", date:"01-26-2023"}, {name:"snake", post:"What's hew\nNew\nI keep forgetting to drop in here", date:"01-18-2023"}, {name:"helli", post:"I'll go if Emma goes", date:"01-02-2023"}, {name:"gamein", post:"Dude midsommar", date:"01-22-2023"}])

  function addNewPost(post){
    let tempPosts =[...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>IdeaBulb</p>
      </header>
      <div>
        <PostPresenter posts={posts} />
        <h2>Got thoughts?</h2>
        <h3>Share an idea. Your friends will see it in their feed.</h3>
        <CreatePostForm addNewPostItem={addNewPost} />
      </div>
    </div>
  );
}

export default App;
