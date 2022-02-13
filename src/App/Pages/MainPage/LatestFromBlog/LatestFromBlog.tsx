import React from 'react';
import { LatestFromBlogHeader } from './LatestFromBlogHeader/LatestFromBlogHeader';
import classes from "./LatestFromBlog.module.scss"
import { LatestFromBlogContent } from './LatestFromBlogContent/LatestFromBlogContent';

const LatestFromBlog = () => {
    return (
        <div className={classes.latestFromBlogContainer}>
            <LatestFromBlogHeader />
            <LatestFromBlogContent />
        </div>
    )
}

export { LatestFromBlog }