// eslint-disable-next-line no-unused-vars
import MyPosts from "./MyPosts/MyPosts"
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
