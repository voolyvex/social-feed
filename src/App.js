import React, { useState } from 'react';
import PostPresenter from './components/PostList';
import AddPost from './components/Post';
import './index.css';

function App() {

  const [entries, setEntries] = useState([{name:"Alec", post:"I like Pizza", date:"01-10-2023"}, {name:"Trenton", post:"Me too, but with mushrooms", date:"01-10-2023"}, {name:"Maddie", post:"I just got a new Kitty", date:"01-14-2023"}])

  function addNewEntry(entry){
    let tempEntries =[...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>SocialFeed</p>
      </header>
      <div>
        <PostPresenter parentEntries={entries} />
        <h2>Got thoughts?</h2>
        <h3>Create a post. Your friends will see it in their feed.</h3>
        <AddPost addNewEntryProperty={addNewEntry} />
      </div>
    </div>
  );
}

export default App;
