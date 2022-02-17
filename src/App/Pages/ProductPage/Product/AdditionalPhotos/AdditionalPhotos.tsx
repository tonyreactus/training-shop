import React from 'react';
import classes from "./AdditionalPhotos.module.scss";
import product2Img from "../../../../../Assets/Images/product2.svg"
import product3Img from "../../../../../Assets/Images/product3.svg"
import product4Img from "../../../../../Assets/Images/product4.svg"
import product5Img from "../../../../../Assets/Images/product5.svg"
import arrowPrevImg from "../../../../../Assets/Images/arrowPrev.svg"
import arrowNextImg from "../../../../../Assets/Images/arrowNext.svg"

const AdditionalPhotos = () => {
    return (
        <div className={classes.additionalPhotosContainer}>
            <div className={classes.arrows}>
                <div className={classes.arrowUpContainer}>
                    <img alt={"img"} src={arrowPrevImg} />
                </div>

                <div className={classes.arrowDownContainer}>
                    <img alt={"img"} src={arrowNextImg} />
                </div>
            </div>

            <div className={classes.imgContainer}>
                <img alt={"img"} src={product2Img} />
            </div>

            <div className={classes.imgContainer}>
                <img alt={"img"} src={product3Img} />
            </div>

            <div className={classes.imgContainer}>
                <img alt={"img"} src={product4Img} />
            </div>

            <div className={classes.imgContainer}>
                <img alt={"img"} src={product5Img} />
            </div>
        </div>
    )
}

export { AdditionalPhotos }