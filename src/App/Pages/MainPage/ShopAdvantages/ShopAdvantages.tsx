import React from 'react';
import { shopAdvanteges } from '../../../../MockApi/ShopAdvantages';
import classes from "./ShopAdvantages.module.scss";

const ShopAdvantages = () => {
    return (
        <div className={classes.shopAdvantagesContainer}>
            {
                shopAdvanteges.map(({ name, description, image }) => (
                    <div className={classes.advantage}>
                        <div className={classes.imgContainer}>
                            <img alt={name} src={image} />
                        </div>

                        <div className={classes.textContainer}>
                            <span className={classes.name}>{name}</span>
                            <span className={classes.description}>{description}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export { ShopAdvantages }