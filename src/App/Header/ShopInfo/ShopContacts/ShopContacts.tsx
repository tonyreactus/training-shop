import React from 'react';
import { shopContacts } from '../../../../MockApi/ShopContacts';
import classes from "./ShopContacts.module.scss";
import clocksImg from "../../../../Assets/Images/clocks.svg";
import placeMarkImg from "../../../../Assets/Images/placeMark.svg";
import telephoneImg from "../../../../Assets/Images/telephone.svg"

const ShopContacts = () => {
    return (
        <div className={classes.shopInfoDataContainer}>
            <div className={classes.telephoneItem}>
                <div className={classes.telephoneImgContainer}>
                    <img alt={"telephone"} src={telephoneImg} />
                </div>
                <span>{shopContacts.telefone}</span>
            </div>

            <div className={classes.placeMarkItem}>
                <div className={classes.placeMarkImgContainer}>
                    <img alt={"placeMark"} src={placeMarkImg} />
                </div>
                <span>{`${shopContacts.address.country}, ${shopContacts.address.city}, ${shopContacts.address.street}`}</span>
            </div>

            <div className={classes.workingHoursItem}>
                <div>
                    <img alt={"clocksMark"} src={clocksImg} className={classes.workingHoursImgContainer} />
                </div>
                <span>{shopContacts.workingHours}</span>
            </div>
        </div>
    )
}

export { ShopContacts }