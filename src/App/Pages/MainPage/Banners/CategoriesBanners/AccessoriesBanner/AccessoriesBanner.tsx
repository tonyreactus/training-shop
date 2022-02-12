import React from 'react';
import accessoriesImg from "../../../../../../Assets/Images/accessories.svg";
import classes from "./AccessoriesBanner.module.scss"

const AccessoriesBanner = () => {
    return (
        <div className={classes.accessoriesBannerConatainer}>
            <img alt={"accessories"} src={accessoriesImg} />
        </div>
    )
}

export { AccessoriesBanner }