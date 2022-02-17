import React from 'react';
import { ClothesContet } from '../../../Common/Components/Clothes/ClothesContent/ClothesContent';
import { PageActions } from '../../../Common/Components/PageActions/PageActions';
import { PageLoadingMore } from '../../../Common/Components/PageLoadingMore/PageLoadingMore';
import { PageHeader } from '../../../Common/Components/PageHeader/PageHeader';
import { womensClothes } from '../../../MockApi/ClothesData';

const WomenPage = () => {
    return (
        <div>
            <PageHeader title={"Women"} />
            <PageActions />
            <ClothesContet clothesData={womensClothes} type={"women"} />
            <PageLoadingMore />
        </div>
    )
}

export { WomenPage }