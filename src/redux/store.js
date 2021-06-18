import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

let store = {
    _states: {
        profilePage: {
            posts: [
            {message: "Hi world"},
            {message: "Hallo world"},
            {message: "Hi everyone"}
            ],
            newPostText: ""
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
            newMessageText: ""
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
        this._states.profilePage = profileReducer(this._states.profilePage, action)
        this._states.dialogsPage = dialogsReducer(this._states.dialogsPage, action)
        this._rerenderEntireTree(this._states)
    }
}


window.store = store

export default store;