import React from 'react';
import classes from "./SubFooter.module.scss";
import stripeImg from "../../../Assets/Images/stripe.svg";
import aesImg from "../../../Assets/Images/aes.svg";
import paypalImg from "../../../Assets/Images/paypal.svg";
import visaImg from "../../../Assets/Images/visa.svg";
// import masterCardImg from "../../../Assets/Images/masterCard.svg";
import discoverImg from "../../../Assets/Images/discover.svg";
import americanExpressImg from "../../../Assets/Images/americanExpress.svg";

const SubFooter = () => {
    return (
        <div className={classes.subFooter}>
            <span>{"Copyright © 2032 all rights reserved"}</span>

            <div className={classes.paymentSystemsContainer}>
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

                {/* <div className={classes.masterCard}>
                    <img alt={"masterCard"} src={masterCardImg} />
                </div> */}

                <div className={classes.discover}>
                    <img alt={"discover"} src={discoverImg} />
                </div>

                <div className={classes.americanExpress}>
                    <img alt={"americanExpress"} src={americanExpressImg} />
                </div>
            </div>

            <a href={"https://clevertec.ru/study/frontend.html"}>{"Clevertec.ru/training"}</a>
        </div>
    )
}

export { SubFooter }