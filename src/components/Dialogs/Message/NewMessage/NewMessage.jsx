import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../redux/state";
import style from "./NewMessage.module.css"

const NewMessage = (props) => {
    let newMessage = React.createRef()

    const onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    return (
        <div className={style.newMessage}>
                <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageText}/>
                <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default NewMessage;