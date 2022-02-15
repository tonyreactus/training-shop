import React from 'react';
import { Link } from 'react-router-dom';
import { ERoutePath } from '../../../../Const/ERoutePath';
import { RoutePathMap, RoutePathTitleMap } from '../../../../Const/RoutePathMap';
import classes from "./UsefulLinks.module.scss"

const UsefulLinks = () => {
    return (
        <div className={classes.usefulLinksContainer}>
            <span>{"Useful links"}</span>
            <div className={classes.links}>
                <Link to={RoutePathMap[ERoutePath.termsAndConditions]}>{RoutePathTitleMap.termsAndConditions}</Link>
                <Link to={RoutePathMap[ERoutePath.returnsAndExchanges]}>{RoutePathTitleMap.returnsAndExchanges}</Link>
                <Link to={RoutePathMap[ERoutePath.shippingAndDelivery]}>{RoutePathTitleMap.shippingAndDelivery}</Link>
                <Link to={RoutePathMap[ERoutePath.privacyPolicy]}>{RoutePathTitleMap.privacyPolicy}</Link>
            </div>
        </div>
    )
}

export { UsefulLinks }