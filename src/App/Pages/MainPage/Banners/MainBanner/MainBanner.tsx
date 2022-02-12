import React from 'react';
import bannerImg from "../../../../../Assets/Images/banner.svg";
import classes from "./MainBanner.module.scss"

const MainBanner = () => {
    return (
        <div className={classes.mainBannerContainer}>
            <img alt={"mainBanner"} src={bannerImg} />
            <div className={classes.textContainer}>
                <span className={classes.text1}>{"Banner"}</span>
                <span className={classes.text2}>{"Your title text"}</span>
            </div>
        </div>
    )
}

export { MainBanner }