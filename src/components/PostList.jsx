/* Here create the feed where all your posts will be displayed in your app. All posts should be passed into this component using props. Then, utilize the “map” higher order array method to map each post to its own Post component. */
import Post from "./Post"


const PostPresenter = (props) => {

  const reverseFeed = [...props.posts].reverse()
    return (  
      <div className="post-feed">
  
          {reverseFeed.map((post, index) => {
            return (
             <Post key={index} post={post}/>
            );
          })}
      </div>
      
    );
}
 
export default PostPresenter;