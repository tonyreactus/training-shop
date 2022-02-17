import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../../../Assets/Images/logo.svg"
import { ERoutePath } from '../../../../Const/ERoutePath';
import { RoutePathMap } from '../../../../Const/RoutePathMap';

const ShopLogo = () => {
    return (
        <Link to={RoutePathMap[ERoutePath.main]} data-test-id={"header-logo-link"}>
            <img alt={"logo"} src={logoImg} />
        </Link>
    )
}

export { ShopLogo }