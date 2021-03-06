// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {
  let creatNewPost = React.createRef()

  const addPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    let text = creatNewPost.current.value;
    props.postChange(text)
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
        {props.postEl}
      </div>
    </div>
  );
};

export default MyPosts;
