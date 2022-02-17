import React from 'react';
import { AdditionalPhotos } from './AdditionalPhotos/AdditionalPhotos';
import { MainPhoto } from './MainPhoto/MainPhoto';
import classes from "./Product.module.scss"
import { ProductInfo } from './ProductInfo/ProductInfo';

const Product = () => {
    return (
        <div className={classes.productInfoContainer}>
            <AdditionalPhotos />
            <MainPhoto />
            <ProductInfo />
        </div>
    )
}

export { Product }