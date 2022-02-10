import React from 'react';
import { ShopLogo } from './ShopLogo/ShopLogo';
import classes from "./NavigationMenu.module.scss"
import { Links } from './Links/Links';
import { Actions } from './Actions/Actions';

const NavigationMenu = () => {
    return (
        <div className={classes.navigationMenu}>
            <ShopLogo />

            <Links />

            <Actions />
        </div>
    )
}

export { NavigationMenu }