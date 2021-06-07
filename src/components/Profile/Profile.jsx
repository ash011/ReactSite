// eslint-disable-next-line no-unused-vars
import MyPosts from "./MyPosts/MyPosts"
import style from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""
        />{" "}
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
