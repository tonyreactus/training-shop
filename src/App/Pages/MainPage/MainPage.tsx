import React from 'react';
import { Clothes } from '../../../Common/Components/Clothes/Clothes';
import { mensClothes, womensClothes } from '../../../MockApi/ClothesData';
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
            <Clothes type={"women"} title={"Women's"} clothesData={womensClothes} />
            <Clothes type={"men"} title={"Men's"} clothesData={mensClothes} />
            <News />
            <SpecialOffer />
            <LatestFromBlog />
        </div>
    )
}

export { MainPage }