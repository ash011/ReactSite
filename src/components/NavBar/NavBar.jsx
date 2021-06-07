// eslint-disable-next-line no-unused-vars
import style from "./NavBar.module.css"
import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.active} >Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.active} >Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.active} >News</NavLink>
      </div>
      <div  className={style.item}>
        <NavLink to="/music" activeClassName={style.active} >Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.active} >Settings</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
