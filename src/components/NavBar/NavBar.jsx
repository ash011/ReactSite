// eslint-disable-next-line no-unused-vars
import style from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <a href>Profile</a>
      </div>
      <div className={style.item}>
        <a href>Messages</a>
      </div>
      <div className={style.item}>
        <a href>News</a>
      </div>
      <div  className={style.item}>
        <a href>Music</a>
      </div>
      <div className={style.item}>
        <a href>Settings</a>
      </div>
    </nav>
  );
};

export default NavBar;
