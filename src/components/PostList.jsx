/* Here create the feed where all your posts will be displayed in your app. All posts should be passed into this component using props. Then, utilize the “map” higher order array method to map each post to its own Post component. */

import LikeDislikeButton from "./Buttons";



const PostPresenter = (props) => {
    return (  
        <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Post </th>
            <th> Date </th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry,index) => {
            return (
              <tr key={index}>
                <td>{entry.name}</td>
                <li>
                <td>{entry.post}</td>
                </li>
                <td>{entry.date}</td>
                <LikeDislikeButton />
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}
 
export default PostPresenter;