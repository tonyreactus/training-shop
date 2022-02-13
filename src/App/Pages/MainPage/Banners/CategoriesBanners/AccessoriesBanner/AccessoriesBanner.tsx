import React from 'react';
import { Link } from 'react-router-dom';
import accessoriesImg from "../../../../../../Assets/Images/accessories.svg";
import { ERoutePath } from '../../../../../../Const/ERoutePath';
import { RoutePathMap } from '../../../../../../Const/RoutePathMap';
import classes from "./AccessoriesBanner.module.scss"

const AccessoriesBanner = () => {
    return (
        <div className={classes.accessoriesBannerConatainer}>
            <img alt={"accessories"} src={accessoriesImg} />
            <Link to={RoutePathMap[ERoutePath.accessories]}>
                <div className={classes.textContainer}>
                    <span>{"Accessories"}</span>
                </div>
            </Link>
        </div>
    )
}

export { AccessoriesBanner }