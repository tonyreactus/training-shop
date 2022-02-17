import React from 'react';
import favoriteImg from "../../../../../../Assets/Images/favorite.svg"
import scalesImg from "../../../../../../Assets/Images/scales.svg"
import classes from "./Price.module.scss"

const Price = () => {
    return (
        <div className={classes.priceContainer}>
            <div className={classes.price}>
                <span>{"$ 379.99"}</span>
            </div>

            <div className={classes.buttonContainer}>
                <button>
                    <span>{"Add to cart"}</span>
                </button>
            </div>

            <div className={classes.imgComtainer}>
                <img alt={"favorite"} src={favoriteImg} />
            </div>

            <div className={classes.imgComtainer}>
                <img alt={"scales"} src={scalesImg} />
            </div>
        </div>
    )
}

export { Price }