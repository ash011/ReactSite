import style from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./Message/Message";
import NewMessage from "./Message/NewMessage/NewMessage"

const Dialogs = (props) => {
  let dialogsEl = props.info.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messagesEl = props.info.messages.map(m => <Messages message={m.message}/>)
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsEl}
      </div>
      <div className={style.messages}>
        {messagesEl}
        <NewMessage dispatch={props.dispatch} newMessageText={props.info.newMessageText}/>
      </div>
    </div>
  );
};

export default Dialogs;
