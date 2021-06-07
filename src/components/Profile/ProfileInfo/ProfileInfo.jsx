// eslint-disable-next-line no-unused-vars
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={style.img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""
        />{" "}
      </div>
      <div className={style.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
