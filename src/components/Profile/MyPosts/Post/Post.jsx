// eslint-disable-next-line no-unused-vars
import style from "./Post.module.css"

const Post = (props) => {
  return (
        <div className={style.item}>
          <img src="https://topmsg.ru/wp-content/uploads/anonymous.jpg" alt="avatar" />
          `{props.message}`
        </div>
  );
};

export default Post;
