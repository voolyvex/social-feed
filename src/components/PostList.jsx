/* Here create the feed where all your posts will be displayed in your app. All posts should be passed into this component using props. Then, utilize the “map” higher order array method to map each post to its own Post component. */
import Post from "./Post"


const PostPresenter = (props) => {
    return (  
      <div>
  
          {props.posts.map((post) => {
            return (
             < Post post={post}/>
            );
          })}
      </div>
      
    );
}
 
export default PostPresenter;