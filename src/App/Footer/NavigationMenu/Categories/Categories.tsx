import React from 'react';
import { Link } from 'react-router-dom';
import { ERoutePath } from '../../../../Const/ERoutePath';
import { RoutePathMap, RoutePathTitleMap } from '../../../../Const/RoutePathMap';
import classes from "./Categories.module.scss"

const Categories = () => {
    return (
        <div className={classes.categoriesContainer}>
            <span>{"Categories"}</span>
            <div className={classes.links}>
                <Link to={RoutePathMap[ERoutePath.men]} data-test-id={`footer-nav-link-${ERoutePath.men}`}>{RoutePathTitleMap.men}</Link>
                <Link to={RoutePathMap[ERoutePath.women]} data-test-id={`footer-nav-link-${ERoutePath.women}`}>{RoutePathTitleMap.women}</Link>
                <Link to={RoutePathMap[ERoutePath.accessories]} data-test-id={`footer-nav-link-${ERoutePath.accessories}`}>{RoutePathTitleMap.accessories}</Link>
                <Link to={RoutePathMap[ERoutePath.beauty]} data-test-id={`footer-nav-link-${ERoutePath.beauty}`}>{RoutePathTitleMap.beauty}</Link>
            </div>
        </div>
    )
}

export { Categories }