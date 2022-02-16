import React from 'react';
import { ClothesContet } from '../../../Common/Components/Clothes/ClothesContent/ClothesContent';
import { PageActions } from '../../../Common/Components/PageActions/PageActions';
import { PageFooter } from '../../../Common/Components/PageFooter/PageFooter';
import { PageHeader } from '../../../Common/Components/PageHeader/PageHeader';
import { womensClothes } from '../../../MockApi/ClothesData';

const WomenPage = () => {
    return (
        <div>
            <PageHeader title={"Women"} />
            <PageActions />
            <ClothesContet clothesData={womensClothes} />
            <PageFooter />
        </div>
    )
}

export { WomenPage }