import React from 'react';
import classes from "./Colors.module.scss"
import product6Img from "../../../../../../Assets/Images/product6.svg"
import product7Img from "../../../../../../Assets/Images/product7.svg"
import product8Img from "../../../../../../Assets/Images/product8.svg"
import product9Img from "../../../../../../Assets/Images/product9.svg"

const Colors = () => {
    return (
        <div className={classes.colorsContainer}>
            <div className={classes.parameter}>
                <span className={classes.key}>{"Color:"}</span>
                <span className={classes.value}>{"Blue"}</span>
            </div>

            <div className={classes.images}>
                <div className={classes.imgContainer}>
                    <img alt={"img"} src={product6Img} />
                </div>

                <div className={classes.imgContainer}>
                    <img alt={"img"} src={product7Img} />
                </div>

                <div className={classes.imgContainer}>
                    <img alt={"img"} src={product8Img} />
                </div>

                <div className={classes.imgContainer}>
                    <img alt={"img"} src={product9Img} />
                </div>
            </div>
        </div>
    )
}

export { Colors }