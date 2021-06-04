// eslint-disable-next-line no-unused-vars
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
      <div>
        My posts
        <div>New posts</div>
        <div>
          <div className={style.item}>post 1</div>
          <div className={style.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
