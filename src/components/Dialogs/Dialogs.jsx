import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={style.dialog}>
          <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Messages = (props) => {
    return <div className={style.message}>{props.message}</div>     
}

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <Dialog name="Ash" id="1"/>
        <Dialog name="Gev" id="2"/>
        <Dialog name="Val" id="3"/>
        <Dialog name="Kar" id="4"/>
      </div>
      <div className={style.messages}>
        <Messages message="Hi"/>
        <Messages message="Hallow"/>
        <Messages message="By"/>
        <Messages message="By"/>
        <Messages message="By"/>
      </div>
    </div>
  );
};

export default Dialogs;
