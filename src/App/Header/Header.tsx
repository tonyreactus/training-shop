import React from 'react';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { ShopInfo } from './ShopInfo/ShopInfo';

const Header = () => {
    return (
        <div>
            <ShopInfo />
            <NavigationMenu />
        </div>
    )
}

export { Header }