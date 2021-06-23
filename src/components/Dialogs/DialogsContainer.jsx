import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./Message/Message";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let dialogsEl = props.store.getState().dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messagesEl = props.store.getState().dialogsPage.messages.map(m => <Messages message={m.message}/>)
  return <Dialogs dialogsEl={dialogsEl} messagesEl={messagesEl} store={props.store}/>
};

export default DialogsContainer;
