// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsEl = props.posts.map(p => <Post message={p.message} /> )
  let creatNewPost = React.createRef()

  const addPost = () => {
    props.dispatch({type: "ADD-POST"})
  }

  const onPostChange = () => {
    let text = creatNewPost.current.value;
    props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
  }

  return (
    <div className={style.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={creatNewPost} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsEl}
      </div>
    </div>
  );
};

export default MyPosts;
