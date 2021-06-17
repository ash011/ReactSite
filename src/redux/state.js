const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

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
            ]
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
        }
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
window.store = store

export default store;