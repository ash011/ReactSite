// eslint-disable-next-line no-unused-vars
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={style.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        <Post message="Hi world" />
        <Post message="Hello world" />
      </div>
    </div>
  );
};

export default MyPosts;
