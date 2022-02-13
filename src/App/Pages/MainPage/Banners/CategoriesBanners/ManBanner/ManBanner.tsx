import React from 'react';
import { Link } from 'react-router-dom';
import manImg from "../../../../../../Assets/Images/manBanner.svg";
import { ERoutePath } from '../../../../../../Const/ERoutePath';
import { RoutePathMap } from '../../../../../../Const/RoutePathMap';
import classes from "./ManBanner.module.scss"

const ManBanner = () => {
    return (
        <div className={classes.manBannerConatainer}>
            <img alt={"man"} src={manImg} />
            <Link to={RoutePathMap[ERoutePath.men]}>
                <div className={classes.textContainer}>
                    <span>{"Men"}</span>
                </div>
            </Link>
        </div>
    )
}

export { ManBanner }