import React from 'react';
import {addPostActionCreator, updateActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());

    }
    let onPostChange = (text) => {
        props.store.dispatch(updateActionCreator(text));
    }
    return (
        <Posts addPost={addPost} updateNewPostText={onPostChange} dataPost={state.mainPage.postData}
               newPostText={state.mainPage.newPostText}/>)


}
export default PostsContainer;