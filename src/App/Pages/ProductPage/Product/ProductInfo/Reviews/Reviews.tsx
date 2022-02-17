import React from 'react';
import classes from "./Reviews.module.scss"
import filledStarImg from "../../../../../../Assets/Images/filledStar.svg"
import reviewImg from "../../../../../../Assets/Images/review.svg"

const Reviews = () => {
    return (
        <div className={classes.reviewsContainer}>
            <div className={classes.title}>
                <span>{"Reviews"}</span>
            </div>

            <div className={classes.ratingContaiiner}>
                <div className={classes.starsContainer}>
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

                <div className={classes.writeReviewContainer}>
                    <div className={classes.imgContainer}>
                        <img alt={"review"} src={reviewImg} />
                    </div>
                    <span>{"Write a review"}</span>
                </div>
            </div>

            <div className={classes.reviewContainer}>
                <div className={classes.reviewHeader}>
                    <div className={classes.author}>
                        <span>{"Oleh Chabanov"}</span>
                    </div>

                    <div className={classes.rate}>
                        {
                            Array.from(Array(5).keys()).map((item) => (
                                <div key={item} className={classes.imgContainer}>
                                    <img alt={"star"} src={filledStarImg} />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={classes.review}>
                    <span>
                        {"On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment"}
                    </span>
                </div>
            </div>

            <div className={classes.reviewContainer}>
                <div className={classes.reviewHeader}>
                    <div className={classes.author}>
                        <span>{"ShAmAn design"}</span>
                    </div>

                    <div className={classes.rate}>
                        {
                            Array.from(Array(5).keys()).map((item) => (
                                <div key={item} className={classes.imgContainer}>
                                    <img alt={"star"} src={filledStarImg} />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={classes.review}>
                    <span>
                        {"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"}
                    </span>
                </div>
            </div>

            <div className={classes.border} />
        </div>
    )
}

export { Reviews }