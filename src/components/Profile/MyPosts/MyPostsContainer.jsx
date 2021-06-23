// eslint-disable-next-line no-unused-vars
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import Post from "./Post/Post";
import MyPosts from "./MyPosts"

const MyPostsContainer = (props) => {
  let newPostText = props.store.getState().profilePage.newPostText
  let postEl = props.store.getState().profilePage.posts.map(p => <Post message={p.message} /> )

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }

  return <MyPosts postEl={postEl} addPost={addPost} postChange={onPostChange} newPostText={newPostText}/>
};

export default MyPostsContainer;
