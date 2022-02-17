import React from 'react';
import classes from "./PaymentSystems2.module.scss"
import stripeImg from "../../../../../../Assets/Images/stripe2.svg"
import aesImg from "../../../../../../Assets/Images/aes2.svg"
import paypalImg from "../../../../../../Assets/Images/paypal2.svg"
import visaImg from "../../../../../../Assets/Images/visa2.svg"
import masterCardImg from "../../../../../../Assets/Images/mastercard2.svg"
import discoverImg from "../../../../../../Assets/Images/discover2.svg"
import americanExpressImg from "../../../../../../Assets/Images/americanExpress2.svg"

const PaymentSystems2 = () => {
    return (
        <div className={classes.paymentSystemsContainer}>
            <div className={classes.title}>
                <span>{"Guaranteed safe checkout"}</span>
                <div className={classes.border} />
            </div>

            <div className={classes.paymentSystems}>
                <div className={classes.stripe}>
                    <img alt={"stripe"} src={stripeImg} />
                </div>

                <div className={classes.aes}>
                    <img alt={"aes"} src={aesImg} />
                </div>

                <div className={classes.paypal}>
                    <img alt={"paypal"} src={paypalImg} />
                </div>

                <div className={classes.visa}>
                    <img alt={"visa"} src={visaImg} />
                </div>

                <div className={classes.masterCard}>
                    <img alt={"masterCard"} src={masterCardImg} />
                </div>

                <div className={classes.discover}>
                    <img alt={"discover"} src={discoverImg} />
                </div>

                <div className={classes.americanExpress}>
                    <img alt={"americanExpress"} src={americanExpressImg} />
                </div>
            </div>
        </div>

    )
}

export { PaymentSystems2 }