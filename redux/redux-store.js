import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    mainPage :profileReducer,
    messagePage: dialogReducer,
    newsPage: newsReducer,
});

let store = createStore(reducers);

export default store;