import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../../../Assets/Images/logo.svg"
import { ERoutePath } from '../../../../Const/ERoutePath';
import { RoutePathMap } from '../../../../Const/RoutePathMap';

const ShopLogo = () => {
    return (
        <div>
            <Link to={RoutePathMap[ERoutePath.main]}>
                <img alt={"logo"} src={logoImg} />
            </Link>
        </div>
    )
}

export { ShopLogo }