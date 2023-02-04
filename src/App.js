import React, { useState } from 'react';
import PostPresenter from './components/PostList';
import CreatePostForm from './components/CreatePostForm';
import {GoLightBulb} from 'react-icons/go';
import './index.css';
import { BiBomb } from 'react-icons/bi';


function App() {

  const [posts, setPosts] = useState([{name:"alek", post:"yoo\ngreetings from vienna", date:"01-19-2023"}, {name:"hootie", post:"Everything is awesome: Don't forget the Lego - Tagg - 2019 - Journal of Paediatrics and Child Health - Wiley Online Library\nhttps://onlinelibrary.wiley.com/doi/full/10.1111/jpc.14309", date:"01-26-2023"}, {name:"snake", post:"What's hew\nNew\nI keep forgetting to drop in here", date:"01-18-2023"}, {name:"helli", post:"I'll go if Emma goes", date:"01-02-2023"}, {name:"gamein", post:"Dude midsommar", date:"01-22-2023"}])

  function addNewPost(post){
    let tempPosts =[...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className='App'>
      <header className='title-gradient-box'>
        <div className='title-text-box'>IdeaBulb</div>
      </header>
      <div className='post-backdrop'>
        <div className='create-post-container'>
          <h2>Got thoughts? </h2>
          <GoLightBulb className='logo-icon'/>
          <h3>Share an idea.</h3>
          <h3>Your friends will love it. Or not! </h3>
          <BiBomb className='logo-icon-2'/>
        </div>
        <CreatePostForm addNewPostItem={addNewPost} />
        <PostPresenter posts={posts} />
      </div>
      <footer>
        <p>&copy; 2023 IdeaBulb</p>
      </footer>
    </div>
  );
}

export default App;
