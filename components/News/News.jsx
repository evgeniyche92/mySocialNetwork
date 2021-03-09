import React from "react";
import news from './News.module.css'

import FeedsNew from "./FeedsNew/FeedsNew";

const News = (props) => {

    return (
        <div className={news.nov}>
    <FeedsNew state={props.dataNews.news}/>
        </div>
    )
}
export default News;