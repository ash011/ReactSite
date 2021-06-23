import style from "./Dialogs.module.css";
import NewMessageContainer from "./Message/NewMessage/NewMessageContainer";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {props.dialogsEl}
      </div>
      <div className={style.messages}>
        {props.messagesEl}
        <NewMessageContainer store={props.store}/>
      </div>
    </div>
  );
};

export default Dialogs;
