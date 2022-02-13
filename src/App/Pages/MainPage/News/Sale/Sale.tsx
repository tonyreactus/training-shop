import React from 'react';
import news2Img from "../../../../../Assets/Images/news2.svg"
import classes from "./Sale.module.scss"

const Sale = () => {
    return (
        <div className={classes.saleContainer}>
            <img alt={"sale"} src={news2Img} />

            <div className={classes.textContainer}>
                <span className={classes.text1}>{"Sale"}</span>

                <div>
                    <span className={classes.text2}>{"Get up to"}</span>
                    <span className={classes.text3}>{"50% off"}</span>
                </div>
            </div>
        </div>
    )
}

export { Sale }