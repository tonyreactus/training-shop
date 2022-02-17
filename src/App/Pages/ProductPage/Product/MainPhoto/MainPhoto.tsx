import React from 'react';
import classes from "./MainPhoto.module.scss"
import mainPhotoImg from "../../../../../Assets/Images/product1.svg"

const MainPhoto = () => {
    return (
        <div className={classes.imgContainer}>
            <img alt={"mainPhoto"} src={mainPhotoImg} />
        </div>
    )
}

export { MainPhoto }