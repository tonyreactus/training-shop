import React from 'react';
import { ManBanner } from './ManBanner/ManBanner';
import { WomanBanner } from './WomanBanner/WomanBanner';
import classes from "./CategoriesBanners.module.scss"
import { AccessoriesBanner } from './AccessoriesBanner/AccessoriesBanner';

const CategoriesBanners = () => {
    return (
        <div className={classes.categoriesBannersContainer}>
            <div className={classes.womanManContainer}>
                <WomanBanner />
                <ManBanner />
            </div>
            
            <AccessoriesBanner />
        </div>
    )
}

export { CategoriesBanners }