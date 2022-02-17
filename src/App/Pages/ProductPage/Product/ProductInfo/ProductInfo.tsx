import React from 'react';
import { Advantages } from './Advantages/Advantages';
import { Colors } from './Colors/Colors';
import { Description } from './Description/Description';
import { PaymentSystems2 } from './PaymentSystems2/PaymentSystems2';
import { Price } from './Price/Price';
import classes from "./ProductInfo.module.scss"
import { Sizes } from './Sizes/Sizes';

const ProductInfo = () => {
    return (
        <div className={classes.productInfoContainer}>
            <Colors />
            <Sizes />
            <Price />
            <Advantages />
            <PaymentSystems2 />
            <Description />
        </div>
    )
}

export { ProductInfo }