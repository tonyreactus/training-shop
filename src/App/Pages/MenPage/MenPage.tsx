import React from 'react';
import { ClothesContet } from '../../../Common/Components/Clothes/ClothesContent/ClothesContent';
import { PageActions } from '../../../Common/Components/PageActions/PageActions';
import { PageLoadingMore } from '../../../Common/Components/PageLoadingMore/PageLoadingMore';
import { PageHeader } from '../../../Common/Components/PageHeader/PageHeader';
import { mensClothes } from '../../../MockApi/ClothesData';

const MenPage = () => {
    return (
        <div data-test-id={"prodcuts-page-men"}>
            <PageHeader title={"Men"} />
            <PageActions />
            <ClothesContet clothesData={mensClothes} type={"men"} />
            <PageLoadingMore />
        </div>
    )
}

export { MenPage }