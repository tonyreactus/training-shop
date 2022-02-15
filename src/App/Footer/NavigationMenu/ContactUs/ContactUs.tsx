import React from 'react';
import { shopContacts } from '../../../../MockApi/ShopContacts';
import placeMarkImg from "../../../../Assets/Images/placeMark2.svg";
import telephoneImg from "../../../../Assets/Images/telephone2.svg";
import clocksImg from "../../../../Assets/Images/clocks2.svg";
import emailImg from "../../../../Assets/Images/email.svg";
import classes from "./ContactUs.module.scss";

const ContactUs = () => {
    return (
        <div className={classes.contactUsContainer}>
            <span className={classes.title}>{"Contact us"}</span>

            <div className={classes.contacts}>
                <div className={classes.placeMarkItem}>
                    <div className={classes.imgContainer}>
                        <img alt={"placeMark"} src={placeMarkImg} />
                    </div>
                    <span>{`${shopContacts.address.country}, ${shopContacts.address.city}, ${shopContacts.address.street}`}</span>
                </div>

                <div className={classes.telephoneItem}>
                    <div className={classes.imgContainer}>
                        <img alt={"telephone"} src={telephoneImg} />
                    </div>
                    <span>{shopContacts.telefone}</span>
                </div>

                <div className={classes.workingHoursItem}>
                    <div>
                        <img alt={"clocksMark"} src={clocksImg} className={classes.imgContainer} />
                    </div>
                    <span>{shopContacts.workingHours}</span>
                </div>

                <div className={classes.emailItem}>
                    <div>
                        <img alt={"email"} src={emailImg} className={classes.imgContainer} />
                    </div>
                    <span>{shopContacts.email}</span>
                </div>
            </div>
        </div>
    )
}

export { ContactUs }