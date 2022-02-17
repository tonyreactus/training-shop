import React from 'react';
import classes from "./Advantages.module.scss"
import delivery2Img from "../../../../../../Assets/Images/delivery2.svg"
import shipping2Img from "../../../../../../Assets/Images/shiping2.svg"
import mail2Img from "../../../../../../Assets/Images/mail2.svg"

const Advantages = () => {
    return (
        <div className={classes.advantagesContainer}>
            <div className={classes.delivery}>
                <div className={classes.imgContainer}>
                    <img alt={"img"} src={delivery2Img} />
                </div>
                <span>{"Shipping & Delivery"}</span>
            </div>

            <div className={classes.returns}>
                <div className={classes.imgContainer}>
                    <img alt={"img"} src={shipping2Img} />
                </div>
                <span>{"Returns & Exchanges"}</span>
            </div>

            <div className={classes.mail}>
                <div className={classes.imgContainer}>
                    <img alt={"img"} src={mail2Img} />
                </div>
                <span>{"Ask a question"}</span>
            </div>
        </div>
    )
}

export { Advantages }