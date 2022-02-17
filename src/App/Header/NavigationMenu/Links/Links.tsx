import React from 'react';
import { Link } from 'react-router-dom';
import { ERoutePath } from '../../../../Const/ERoutePath';
import { RoutePathMap, RoutePathTitleMap } from '../../../../Const/RoutePathMap';
import classes from "./Links.module.scss"

const Links = () => {
    return (
        <div className={classes.linksContainer} data-test-id={"menu"}>
            {
                Object
                    .keys(ERoutePath)
                    .filter(item => ![
                        "main",
                        "faqs",
                        "termsAndConditions",
                        "returnsAndExchanges",
                        "shippingAndDelivery",
                        "privacyPolicy"
                    ].includes(item))
                    .map((path, index) => (
                        <Link key={index} to={RoutePathMap[path as ERoutePath]} data-test-id={`menu-link-${path}`}>
                            {RoutePathTitleMap[path as ERoutePath]}
                        </Link>
                    ))
            }
        </div>
    )
}

export { Links }