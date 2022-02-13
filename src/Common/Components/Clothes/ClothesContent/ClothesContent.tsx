import React from 'react';
import { TClothesItem } from '../../../../MockApi/ClothesData';
import { ClothesItem } from './ClothesItem/ClothesItem';
import classes from "./ClothesContent.module.scss"

type TClothesContentProps = {
    clothesData: TClothesItem[]
}

const ClothesContet: React.FC<TClothesContentProps> = ({ clothesData }) => {
    return (
        <div className={classes.clothesContetContainer}>
            {
                clothesData.map((clothesItem, index) => (
                    <ClothesItem
                        key={index}
                        {...clothesItem}
                    />
                ))
            }
        </div>
    )
}

export { ClothesContet }