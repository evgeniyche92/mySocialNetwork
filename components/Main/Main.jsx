import React from 'react';
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";

const Main = (props) => {
    return (
        <ProfileInfo  store={props.store} />
    )
}
export default Main;