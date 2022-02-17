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
                <Link to={RoutePathMap[ERoutePath.aboutUs]} data-test-id={`footer-nav-link-${ERoutePath.aboutUs}`}>{RoutePathTitleMap.aboutUs}</Link>
                <Link to={RoutePathMap[ERoutePath.contact]} data-test-id={`footer-nav-link-${ERoutePath.contact}`}>{RoutePathTitleMap.contact}</Link>
                <Link to={RoutePathMap[ERoutePath.blog]} data-test-id={`footer-nav-link-${ERoutePath.blog}`}>{RoutePathTitleMap.blog}</Link>
                <Link to={RoutePathMap[ERoutePath.faqs]} data-test-id={`footer-nav-link-${ERoutePath.faqs}`}>{RoutePathTitleMap.faqs}</Link>
            </div>
        </div>
    )
}

export { Information }