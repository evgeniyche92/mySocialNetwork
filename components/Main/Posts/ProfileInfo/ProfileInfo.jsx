import main from "./ProfileInfo.module.css";
import React from "react";
import PostsContainer from "../PostsContatiner";


const ProfileInfo = (props) => {
    return (
        <div className={main.back}>
            <div>
                <img className={main.shapka}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSilIPeHjCzeeO5mtLL1G476Q9tbYd65ITw&usqp=CAU'></img>
            </div>
            <div className={main.description}>
                avatar+description
            </div>
            <PostsContainer store={props.store}/>
        </div>
    )
}
export default ProfileInfo;