import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}  store={store}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state=store.getState();
    rerenderEntireTree(state);
});
reportWebVitals();