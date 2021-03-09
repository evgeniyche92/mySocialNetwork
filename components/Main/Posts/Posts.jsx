import React from 'react';
import posts from './Posts.module.css';
import SinglePost from './SinglePost/SinglePost'


const Posts = (props) => {

    let postElements = props.dataPost.map(p => <SinglePost id={p.id} message={p.message} like={p.like}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        newPostElement.current.value = '';
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={posts.item}>
            <div><h3>My post</h3></div>
            <div>New post</div>
            <div><textarea onChange={onPostChange}
                           className={posts.area}
                           ref={newPostElement}
                           value={props.newPostText}
            /></div>
            <div>
                <button className={posts.add}
                        onClick={onAddPost}>
                    Add post
                </button>
            </div>
            {postElements}
        </div>
    )
}
export default Posts; 