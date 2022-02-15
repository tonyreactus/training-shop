import React from 'react';
import { Link } from 'react-router-dom';
import { ERoutePath } from '../../../../Const/ERoutePath';
import { RoutePathMap, RoutePathTitleMap } from '../../../../Const/RoutePathMap';
import classes from "./Information.module.scss"

const Information = () => {
    return (
        <div className={classes.informationContainer}>
            <span>{"Information"}</span>
            <div className={classes.links}>
                <Link to={RoutePathMap[ERoutePath.aboutUs]}>{RoutePathTitleMap.aboutUs}</Link>
                <Link to={RoutePathMap[ERoutePath.contact]}>{RoutePathTitleMap.contact}</Link>
                <Link to={RoutePathMap[ERoutePath.blog]}>{RoutePathTitleMap.blog}</Link>
                <Link to={RoutePathMap[ERoutePath.faqs]}>{RoutePathTitleMap.faqs}</Link>
            </div>
        </div>
    )
}

export { Information }