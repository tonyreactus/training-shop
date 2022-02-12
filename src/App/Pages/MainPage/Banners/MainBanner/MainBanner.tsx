import React from 'react';
import bannerImg from "../../../../../Assets/Images/banner.svg";
import classes from "./MainBanner.module.scss"

const MainBanner = () => {
    return (
        <div className={classes.mainBannerContainer}>
            <img alt={"mainBanner"} src={bannerImg} />
        </div>
    )
}

export { MainBanner }