// eslint-disable-next-line no-unused-vars
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsEl = props.posts.map(p => <Post message={p.message} /> )
  let creatNewPost = React.createRef()

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onPostChange = () => {
    let text = creatNewPost.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
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
