import React from 'react';
import { Banners } from './Banners/Banners';
import { LatestFromBlog } from './LatestFromBlog/LatestFromBlog';
import { ShopAdvantages } from './ShopAdvantages/ShopAdvantages';

const MainPage = () => {
    return (
        <div>
            <Banners />
            <ShopAdvantages />
            <LatestFromBlog />
        </div>
    )
}

export { MainPage }