import React from 'react';
import classes from "./SpecialOffer.module.scss";
import womanImg from "../../../../Assets/Images/woman.svg";
import manImg from "../../../../Assets/Images/man.svg"

const SpecialOffer = () => {
    return (
        <div className={classes.specialOfferBlock}>
            <div className={classes.womanImgContainer}>
                <img alt={"woman"} src={womanImg} />
            </div>

            <div className={classes.textContainer}>
                <span className={classes.text1}>{"Special offer"}</span>
                <span className={classes.text2}>{"Subscribe"}</span>
                <div className={classes.textContainer2}>
                    <span className={classes.text3}>{"And"}</span>
                    <span className={classes.text4}>{"Get 10% off"}</span>
                </div>

                <div className={classes.inputContainer}>
                    <input placeholder={"Enter your email"} />
                </div>

                <div className={classes.buttonContainer}>
                    <button>
                        <span>{"Subscribe"}</span>
                    </button>
                </div>
            </div>

            <div className={classes.manImgContainer}>
                <img alt={"man"} src={manImg} />
            </div>
        </div>
    )
}

export { SpecialOffer }