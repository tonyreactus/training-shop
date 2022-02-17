import React from 'react';
import { ClothesItem } from '../../../../Common/Components/Clothes/ClothesContent/ClothesItem/ClothesItem';
import { relatedProducts } from '../../../../MockApi/ClothesData';
import classes from "./RelatedProducts.module.scss"
import arrowPrevImg from "../../../../Assets/Images/arrowPrev.svg"
import arrowNextImg from "../../../../Assets/Images/arrowNext.svg"

interface IRelatedProductsProps {
    type: "women" | "men"
}

const RelatedProducts: React.FC<IRelatedProductsProps> = ({ type }) => {
    return (
        <div className={classes.relatedProductsContainer}>
            <div className={classes.title}>
                <span>{"Related products"}</span>
                <div className={classes.arrows}>
                    <div className={classes.imgContainer}>
                        <img alt={"arrow"} src={arrowPrevImg} />
                    </div>

                    <div className={classes.imgContainer}>
                        <img alt={"arrow"} src={arrowNextImg} />
                    </div>
                </div>
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