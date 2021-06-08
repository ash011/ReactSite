// eslint-disable-next-line no-unused-vars
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsEl = props.posts.map(p => <Post message={p.message} /> )

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
        {postsEl}
      </div>
    </div>
  );
};

export default MyPosts;
