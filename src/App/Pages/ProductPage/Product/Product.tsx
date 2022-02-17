import React from 'react';
import { AdditionalPhotos } from './AdditionalPhotos/AdditionalPhotos';
import { MainPhoto } from './MainPhoto/MainPhoto';
import classes from "./Product.module.scss"
import { ProductInfo } from './ProductInfo/ProductInfo';

const Product = () => {
    return (
        <div className={classes.productInfoContainer}>
            <div className={classes.photosContain}>
                <AdditionalPhotos />
                <MainPhoto />
            </div>
            <ProductInfo />
        </div>
    )
}

export { Product }