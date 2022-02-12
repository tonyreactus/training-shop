import React from 'react';
import womanImg from "../../../../../../Assets/Images/woman.svg";
import classes from "./WomanBanner.module.scss"

const WomanBanner = () => {
    return (
        <div className={classes.womanBannerConatainer}>
            <img alt={"woman"} src={womanImg} />
        </div>
    )
}

export { WomanBanner }