import React from 'react';
import { ShopContacts } from './ShopContacts/ShopContacts';
import { SocialNetworksLinks } from './SocialNetworksLinks/SocialNetworksLinks';
import classes from "./ShopInfo.module.scss"

const ShopInfo = () => {
    return (
        <>
            <div className={classes.shopInfo}>
                <ShopContacts />
                <SocialNetworksLinks />
            </div>
        </>
    )
}

export { ShopInfo }