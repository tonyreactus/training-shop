import React from 'react';
import classes from "./PageLoadingMore.module.scss";
import loadingImg from "../../../Assets/Images/squareLoading.svg"

const PageLoadingMore = () => {
    return (
        <div className={classes.pageFooterContainer}>
            <div className={classes.imgContainer}>
                <img alt={"loading"} src={loadingImg} />
            </div>
        </div>
    )
}

export { PageLoadingMore }