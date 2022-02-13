import React from 'react';
import { Banners } from './Banners/Banners';
import { LatestFromBlog } from './LatestFromBlog/LatestFromBlog';
import { News } from './News/News';
import { ShopAdvantages } from './ShopAdvantages/ShopAdvantages';
import { SpecialOffer } from './SpecialOffer/SpecialOffer';

const MainPage = () => {
    return (
        <div>
            <Banners />
            <ShopAdvantages />
            <News />
            <SpecialOffer />
            <LatestFromBlog />
        </div>
    )
}

export { MainPage }