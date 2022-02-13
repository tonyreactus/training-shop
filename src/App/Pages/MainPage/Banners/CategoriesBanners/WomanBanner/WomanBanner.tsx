import React from 'react';
import { Link } from 'react-router-dom';
import womanImg from "../../../../../../Assets/Images/woman.svg";
import { ERoutePath } from '../../../../../../Const/ERoutePath';
import { RoutePathMap } from '../../../../../../Const/RoutePathMap';
import classes from "./WomanBanner.module.scss"

const WomanBanner = () => {
    return (
        <div className={classes.womanBannerConatainer}>
            <img alt={"woman"} src={womanImg} />
            <Link to={RoutePathMap[ERoutePath.women]}>
                <div className={classes.textContainer}>
                    <span>{"Women"}</span>
                </div>
            </Link>
        </div>
    )
}

export { WomanBanner }