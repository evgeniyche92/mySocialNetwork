const addPost = 'ADD-POST';
const updatePost = 'UPDATE';
let initialState={
    friend: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Mikhail'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Svetlana'},
        {id: 6, name: 'Mina'},
    ],
        postData: [
        {id: 1, message: 'Hello, my first post of React App', like: '80'},
        {id: 2, message: 'I want to be a fullstack developer', like: '20'},
        {id: 3, message: 'I want to be a fullstack developer (React JS & Node JS)', like: '34'},
        {id: 4, message: 'I want to be a developer', like: '45'}
    ],
        newPostText: '',
}
const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            };
            state.newPostText = '';
            state.postData.push(newPost);
            return state;
        case updatePost:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
    ;
}
export default profileReducer;
export const addPostActionCreator = () => ({type: addPost});
export const updateActionCreator = (text) => ({type: updatePost, newText: text});
