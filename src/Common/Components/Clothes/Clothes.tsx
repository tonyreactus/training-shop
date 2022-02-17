import React from 'react';
import { ClothesHeader } from './ClothesHeader/ClothesHeader';
import classes from "./Clothes.module.scss";
import { TClothesItem } from '../../../MockApi/ClothesData';
import { ClothesContet } from './ClothesContent/ClothesContent';

type TClothesProps = {
    type: "women" | "men",
    title: string,
    clothesData: TClothesItem[]
}

const Clothes: React.FC<TClothesProps> = ({
    type,
    title,
    clothesData
}) => {
    return (
        <div className={classes.clothesBlock} data-test-id={`clothes-${type}`}>
            <ClothesHeader title={title} type={type} />
            <ClothesContet clothesData={clothesData} type={type} /> 
        </div>
    )
}

export { Clothes }