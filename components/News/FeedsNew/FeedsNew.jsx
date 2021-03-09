import n from "./FeedsNew.module.css"
import React from "react";
import Feed from "../Feed/Feed";

const FeedsNew = (props) => {

    let feeds = props.state.map (m => <Feed news = {m.news} id={m.id}/>);
    return (
        <div className={n.feed}>
            {feeds}
        </div>
    )
}
export default FeedsNew;