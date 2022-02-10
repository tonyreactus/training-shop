import React from 'react';
import { Link } from 'react-router-dom';
import { ERoutePath } from '../../../../Const/ERoutePath';
import { RoutePathMap, RoutePathTitleMap } from '../../../../Const/RoutePathMap';
import classes from "./Links.module.scss"

const Links = () => {
    return (
        <div className={classes.linksContainer}>
            {
                Object
                    .keys(ERoutePath)
                    .filter((path) => path !== ERoutePath.main)
                    .map((path) => (
                        <Link to={RoutePathMap[path as ERoutePath]}>
                            {RoutePathTitleMap[path as ERoutePath]}
                        </Link>
                    ))
            }
        </div>
    )
}

export { Links }