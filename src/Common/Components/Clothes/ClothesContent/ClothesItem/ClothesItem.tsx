import React from 'react';
import { GENERAL_STAR_COUNT, TClothesItem } from '../../../../../MockApi/ClothesData';
import classes from "./ClothesItem.module.scss";
import filledStarImg from "../../../../../Assets/Images/filledStar.svg";
import emptyStarImg from "../../../../../Assets/Images/emptyStar.svg";

type TClothesItemProps = TClothesItem

const ClothesItem: React.FC<TClothesItemProps> = ({
    name,
    price,
    image,
    rating,
    sale,
    priceWithSale
}) => {
    return (
        <div className={classes.clothesItemContainer}>
            <div className={classes.imgContainer}>
                <img alt={"good"} src={image} />
                {sale && <div className={classes.saleContainer}><span>{sale}</span></div>}
            </div>

            <div className={classes.descriptionContainer}>
                <span className={classes.name}>{name}</span>

                <div className={classes.priceWithRatingContainer}>
                    <div>
                        <span className={classes.price}>{`${price.currency} ${price.amount}`}</span>
                        {
                            priceWithSale && (
                                <span className={classes.priceWithSale}>{`${priceWithSale?.currency} ${priceWithSale?.amount}`}</span>
                            )
                        }
                    </div>
                    <div className={classes.ratingContainer}>
                        {
                            Array.from(Array(rating).keys()).map((item) => (
                                <div key={item}>
                                    <img alt={"filledStar"} src={filledStarImg} />
                                </div>
                            ))
                        }
                        {
                            Array.from(Array(GENERAL_STAR_COUNT - rating).keys()).map((item) => (
                                <div key={item}>
                                    <img alt={"emptyStar"} src={emptyStarImg} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ClothesItem }