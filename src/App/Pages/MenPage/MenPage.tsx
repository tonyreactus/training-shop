import React from 'react';
import { ClothesContet } from '../../../Common/Components/Clothes/ClothesContent/ClothesContent';
import { PageActions } from '../../../Common/Components/PageActions/PageActions';
import { PageFooter } from '../../../Common/Components/PageFooter/PageFooter';
import { PageHeader } from '../../../Common/Components/PageHeader/PageHeader';
import { mensClothes } from '../../../MockApi/ClothesData';

const MenPage = () => {
    return (
        <div>
            <PageHeader title={"Men"} />
            <PageActions />
            <ClothesContet clothesData={mensClothes} />
            <PageFooter />
        </div>
    )
}

export { MenPage }