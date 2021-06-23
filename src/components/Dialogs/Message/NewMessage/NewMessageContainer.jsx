import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../redux/dialogsReducer";
import NewMessage from "./NewMessage";

const NewMessageContainer = (props) => {
    let newMessageText = props.store.getState().dialogsPage.newMessageText
    const onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }
    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    return <NewMessage sendMessage={sendMessage} messageChange={onMessageChange} newMessageText={newMessageText}/>
}

export default NewMessageContainer;