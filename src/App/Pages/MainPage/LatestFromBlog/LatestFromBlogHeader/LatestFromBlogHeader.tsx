import React from 'react';
import classes from "./LatestFromBlogHeader.module.scss"

const LatestFromBlogHeader = () => {
    return (
        <div className={classes.latestFromBlogHeaderContainer}>
            <span className={classes.title}>{"Latest from blog"}</span>
            <span className={classes.seeAll}>{"See all"}</span>
        </div>
    )
}

export { LatestFromBlogHeader }