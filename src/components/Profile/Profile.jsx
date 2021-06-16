// eslint-disable-next-line no-unused-vars
import MyPosts from "./MyPosts/MyPosts"
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts updateNewPostText={props.updateNewPostText} posts={props.info.posts} addPost={props.addPost} newPostText={props.info.newPostText}/>
    </div>
  );
};

export default Profile;
