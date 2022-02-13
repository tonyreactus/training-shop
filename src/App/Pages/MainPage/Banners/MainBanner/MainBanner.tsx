import React from 'react';
import bannerImg from "../../../../../Assets/Images/banner.svg";
import classes from "./MainBanner.module.scss";
import arrowPrevImg from "../../../../../Assets/Images/arrowPrev.svg";
import arrowNextImg from "../../../../../Assets/Images/arrowNext.svg"

const MainBanner = () => {
    return (
        <div className={classes.mainBannerContainer}>
            <img alt={"mainBanner"} src={bannerImg} />

            <div className={classes.arrowPrevContainer}>
                <img alt={"arrowPrev"} src={arrowPrevImg} />
            </div>

            <div className={classes.textContainer}>
                <span className={classes.text1}>{"Banner"}</span>
                <span className={classes.text2}>{"Your title text"}</span>
            </div>
            
            <div className={classes.arrowNextContainer}>
                <img alt={"arrowNext"} src={arrowNextImg} />
            </div>
        </div>
    )
}

export { MainBanner }