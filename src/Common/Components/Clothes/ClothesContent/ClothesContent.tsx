import React from 'react';
import { TClothesItem } from '../../../../MockApi/ClothesData';
import { ClothesItem } from './ClothesItem/ClothesItem';
import classes from "./ClothesContent.module.scss"

type TClothesContentProps = {
    clothesData: TClothesItem[],
    type: "women" | "men"
}

const ClothesContet: React.FC<TClothesContentProps> = ({ clothesData, type }) => {
    return (
        <div className={classes.clothesContetContainer}>
            {
                clothesData.map((clothesItem, index) => (
                        <ClothesItem
                            key={index}
                            index={index}
                            type={type}
                            {...clothesItem}
                        />
                ))
            }
        </div>
    )
}

export { ClothesContet }