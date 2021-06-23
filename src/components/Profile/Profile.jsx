// eslint-disable-next-line no-unused-vars
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
  );
};

export default Profile;
