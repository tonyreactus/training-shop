import React from 'react';
import { Link } from 'react-router-dom';
import { ERoutePath } from '../../../../Const/ERoutePath';
import { RoutePathMap, RoutePathTitleMap } from '../../../../Const/RoutePathMap';
import arrowImg from "../../../../Assets/Images/arrow.svg";
import shareImg from "../../../../Assets/Images/share.svg";
import classes from "./ProductPageHeader.module.scss";
import filledStarImg from "../../../../Assets/Images/filledStar.svg"

const ProductPageHeader = () => {
    return (
        <div className={classes.pageHeaderContainer}>
            <div className={classes.navigationContainer}>
                <div className={classes.links}>
                    <Link to={RoutePathMap[ERoutePath.main]} className={classes.parentLink}>{RoutePathTitleMap[ERoutePath.main]}</Link>
                    <div className={classes.arrow1ImgContainer}>
                        <img alt={"arrow"} src={arrowImg} />
                    </div>
                    <Link to={RoutePathMap[ERoutePath.women]} className={classes.parentLink}>{RoutePathTitleMap[ERoutePath.women]}</Link>
                    <div className={classes.arrow2ImgContainer}>
                        <img alt={"arrow"} src={arrowImg} />
                    </div>
                    <span>{"Women's tracksuit Q109"}</span>
                </div>

                <div className={classes.shareContainer}>
                    <div className={classes.imgContainer}>
                        <img alt={"share"} src={shareImg} />
                    </div>
                    <span className={classes.text}>{"Share"}</span>
                </div>
            </div>

            <div className={classes.titleContainer}>
                <span>{"Women's tracksuit Q109"}</span>
            </div>

            <div className={classes.additionalInfo}>
                <div className={classes.ratingInfo}>
                    <div className={classes.stars}>
                        {
                            Array.from(Array(5).keys()).map((item) => (
                                <div key={item} className={classes.imgContainer}>
                                    <img alt={"star"} src={filledStarImg} />
                                </div>
                            ))
                        }
                    </div>
                    <span>{"2 Reviews"}</span>
                </div>
                <div className={classes.parameters}>
                    <div className={classes.sku}>
                        <span className={classes.key}>{"Sku:"}</span>
                        <span className={classes.value}>{"777"}</span>
                    </div>
                    <div className={classes.availability}>
                        <span className={classes.key}>{"Availability:"}</span>
                        <span className={classes.value}>{"In Stock"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProductPageHeader }