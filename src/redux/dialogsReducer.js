const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
    dialogs: [
        {id: 1, name: "Ash"},
        {id: 2, name: "Gev"},
        {id: 3, name: "Val"},
        {id: 4, name: "Kar"},
    ],
    messages: [
        {message: "Hallo"},
        {message: "Hi"},
        {message: "By"},
        {message: "By"},
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE: 
            let newMessage = {
                message: state.newMessageText
            };
            if(state.newMessageText) state.messages.push(newMessage);
            state.newMessageText = "";
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default: 
            return state
    }
}

export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export default dialogsReducer;