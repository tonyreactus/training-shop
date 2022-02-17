import React from 'react';
import { ClothesItem } from '../../../../Common/Components/Clothes/ClothesContent/ClothesItem/ClothesItem';
import { relatedProducts } from '../../../../MockApi/ClothesData';
import classes from "./RelatedProducts.module.scss"

interface IRelatedProductsProps {
    type: "women" | "men"
}

const RelatedProducts: React.FC<IRelatedProductsProps> = ({ type }) => {
    return (
        <div className={classes.relatedProductsContainer}>
            <div className={classes.title}>
                <span>{"Related products"}</span>
            </div>

            <div className={classes.relatedProductsContent}>
                {
                    relatedProducts.map((productData, index) => (
                        <ClothesItem
                            key={index}
                            index={index}
                            type={type}
                            {...productData}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export { RelatedProducts }