// eslint-disable-next-line no-unused-vars
import style from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
  return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div>
          <Post message="Hi world" />
          <Post message="Hello world" />
        </div>
      </div>
  );
};

export default MyPosts;
