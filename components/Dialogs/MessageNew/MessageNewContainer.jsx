import React from "react";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogs-reducer";
import MessageNew from "./MessageNew";

const MessageNewContainer = (props) => {
let state = props.store.getState();

    let but = () => {
        props.store.dispatch(sendMessageActionCreator());
            }
    let changerMessage = (newMessage) => {
        props.store.dispatch(updateMessageActionCreator(newMessage));
    }
    return (<MessageNew changerMessage={changerMessage} sendMessage={but} state={state}/>)
}
export default MessageNewContainer;