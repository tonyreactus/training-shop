import React from 'react';
import classes from "./Description.module.scss"

const Description = () => {
    return (
        <div className={classes.descriptionContainer}>
            <span>{"Description"}</span>
        </div>
    )
}

export { Description }