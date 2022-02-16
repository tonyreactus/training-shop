import React from 'react';
import classes from "./PageFooter.module.scss";
import loadingImg from "../../../Assets/Images/squareLoading.svg"

const PageFooter = () => {
    return (
        <div className={classes.pageFooterContainer}>
            <div className={classes.imgContainer}>
                <img alt={"loading"} src={loadingImg} />
            </div>
        </div>
    )
}

export { PageFooter }