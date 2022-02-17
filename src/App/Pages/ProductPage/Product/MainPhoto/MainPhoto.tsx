import React from 'react';
import classes from "./MainPhoto.module.scss"
import arrowPrevImg from "../../../../../Assets/Images/arrowPrev.svg"
import arrowNextImg from "../../../../../Assets/Images/arrowNext.svg"
import mainPhotoImg from "../../../../../Assets/Images/product1.svg"

const MainPhoto = () => {
    return (
        <div className={classes.imgContainer}>
            <img alt={"mainPhoto"} src={mainPhotoImg} />

            <div className={classes.arrowPrevContainer}>
                <img alt={"arrowPrev"} src={arrowPrevImg} />
            </div>

            <div className={classes.arrowNextContainer}>
                <img alt={"arrowNext"} src={arrowNextImg} />
            </div>
        </div>
    )
}

export { MainPhoto }