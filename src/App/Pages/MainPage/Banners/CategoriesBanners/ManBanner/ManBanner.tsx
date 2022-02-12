import React from 'react';
import manImg from "../../../../../../Assets/Images/man.svg";
import classes from "./ManBanner.module.scss"

const ManBanner = () => {
    return (
        <div className={classes.manBannerConatainer}>
            <img alt={"man"} src={manImg} />
            <div className={classes.textContainer}>
                <span>{"Men"}</span>
            </div>
        </div>
    )
}

export { ManBanner }