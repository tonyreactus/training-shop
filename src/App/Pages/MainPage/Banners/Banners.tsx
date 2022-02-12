import React from 'react';
import { MainBanner } from './MainBanner/MainBanner';
import classes from "./Banners.module.scss"
import { CategoriesBanners } from './CategoriesBanners/CategoriesBanners';

const Banners = () => {
    return (
        <div className={classes.bannersContainer}>
            <MainBanner />
            <CategoriesBanners />
        </div>
    )
}

export { Banners }