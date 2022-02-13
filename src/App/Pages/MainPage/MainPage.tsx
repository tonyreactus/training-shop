import React from 'react';
import { Banners } from './Banners/Banners';
import { LatestFromBlog } from './LatestFromBlog/LatestFromBlog';
import { News } from './News/News';
import { ShopAdvantages } from './ShopAdvantages/ShopAdvantages';

const MainPage = () => {
    return (
        <div>
            <Banners />
            <ShopAdvantages />
            <News />
            <LatestFromBlog />
        </div>
    )
}

export { MainPage }