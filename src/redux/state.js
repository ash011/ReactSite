let rerenderEntireTree

let states = {
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
}
window.state = states
export const addPost = (postInfo) => {
    let newPost = {
        message: states.profilePage.newPostText
    }
    if(states.profilePage.newPostText) states.profilePage.posts.push(newPost);
    states.profilePage.newPostText = ""
    rerenderEntireTree(states)
}

export const updateNewPostText = (newText) => {
    states.profilePage.newPostText = newText
    rerenderEntireTree(states)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}


export default states;