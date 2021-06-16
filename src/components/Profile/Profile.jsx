// eslint-disable-next-line no-unused-vars
import MyPosts from "./MyPosts/MyPosts"
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts posts={props.info.posts} dispatch={props.dispatch} newPostText={props.info.newPostText}/>
    </div>
  );
};

export default Profile;
