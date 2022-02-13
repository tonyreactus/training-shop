import React from 'react';
import { latestFromBlogData } from '../../../../../MockApi/LatestFromBlogData';
import classes from "./LatestFromBlogContent.module.scss"

const LatestFromBlogContent = () => {
    return (
        <div className={classes.latestFromBlogContentContainer}>
            {
                latestFromBlogData.map(({ name, description, image }, index) => (
                    <div key={index} className={classes.itemContainer}>
                        <div className={classes.imgContainer}>
                            <img alt={name} src={image} />
                        </div>

                        <div className={classes.textContainer}>
                            <span className={classes.name}>{name}</span>
                            <span className={classes.description}>{description}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export { LatestFromBlogContent }