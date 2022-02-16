import React from 'react';
import { Link } from 'react-router-dom';
import { ERoutePath } from '../../../Const/ERoutePath';
import { RoutePathMap, RoutePathTitleMap } from '../../../Const/RoutePathMap';
import arrowImg from "../../../Assets/Images/arrow.svg";
import shareImg from "../../../Assets/Images/share.svg";
import classes from "./PageHeader.module.scss"

interface IPageHeaderProps {
    title: string
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title }) => {
    return (
        <div className={classes.pageHeaderContainer}>
            <div className={classes.navigationContainer}>
                <div className={classes.links}>
                    <Link to={RoutePathMap[ERoutePath.main]} className={classes.home}>{RoutePathTitleMap[ERoutePath.main]}</Link>
                    <div className={classes.imgContainer}>
                        <img alt={"arrow"} src={arrowImg} />
                    </div>
                    <span>{title}</span>
                </div>

                <div className={classes.shareContainer}>
                <div className={classes.imgContainer}>
                        <img alt={"share"} src={shareImg} />
                    </div>
                    <span className={classes.text}>{"Share"}</span>
                </div>
            </div>
            <div className={classes.titleContainer}>
                <span>{title}</span>
            </div>
        </div>
    )
}

export { PageHeader }