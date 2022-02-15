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
                <Link to={RoutePathMap[ERoutePath.men]}>{RoutePathTitleMap.men}</Link>
                <Link to={RoutePathMap[ERoutePath.women]}>{RoutePathTitleMap.women}</Link>
                <Link to={RoutePathMap[ERoutePath.accessories]}>{RoutePathTitleMap.accessories}</Link>
                <Link to={RoutePathMap[ERoutePath.beauty]}>{RoutePathTitleMap.beauty}</Link>
            </div>
        </div>
    )
}

export { Categories }