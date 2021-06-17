const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let store = {
    _states: {
        profilePage: {
            posts: [
            {message: "Hi world"},
            {message: "Hallo world"},
            {message: "Hi everyone"}
            ],
            newPostText: "Ashot"
        },
        dialogsPage: {
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
            newMessageText: "Hello"
        } 
    },
    _rerenderEntireTree(){},

    getState(){
        return this._states
    },
    subscribe(observer){
        this._rerenderEntireTree = observer
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                message: this._states.profilePage.newPostText
            };
            if(this._states.profilePage.newPostText) this._states.profilePage.posts.push(newPost);
            this._states.profilePage.newPostText = "";
            this._rerenderEntireTree(this._states) 
        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this._states.profilePage.newPostText = action.newText
            this._rerenderEntireTree(this._states)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._states.dialogsPage.newMessageText = action.newMessage;
            this._rerenderEntireTree(this._states)
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                message: this._states.dialogsPage.newMessageText
            }
            if(this._states.dialogsPage.newMessageText) this._states.dialogsPage.messages.push(newMessage)
            this._states.dialogsPage.newMessageText = ""
            this._rerenderEntireTree(this._states)
        }
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

window.store = store

export default store;