import React from 'react';
import classes from "./Sizes.module.scss"
import hangerImg from "../../../../../../Assets/Images/hanger.svg"

const Sizes = () => {
    return (
        <div className={classes.sizesContainer}>
            <div className={classes.parameter}>
                <span className={classes.key}>{"Size:"}</span>
                <span className={classes.value}>{"S"}</span>
            </div>

            <div className={classes.sizes}>
                <div className={classes.sizeContainer}>
                    <span>{"XS"}</span>
                </div>

                <div className={classes.activeSizeContainer}>
                    <span>{"S"}</span>
                </div>

                <div className={classes.sizeContainer}>
                    <span>{"M"}</span>
                </div>

                <div className={classes.sizeContainer}>
                    <span>{"L"}</span>
                </div>
            </div>

            <div className={classes.sizeGuide}>
                <div className={classes.imgContainer}>
                    <img alt={"hanger"} src={hangerImg} />
                </div>
                <span>{"Size guide"}</span>
            </div>
        </div>
    )
}

export { Sizes }