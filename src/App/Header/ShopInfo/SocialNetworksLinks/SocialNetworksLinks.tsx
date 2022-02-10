import React from 'react';
import classes from "./SocialNetworksLinks.module.css";
import facebookImg from "../../../../Assets/Images/facebook.svg";
import twitterImg from "../../../../Assets/Images/twitter.svg"
import instagramImg from "../../../../Assets/Images/instagram.svg";
import pinterestImg from "../../../../Assets/Images/pinterest.svg"

const SocialNetworksLinks = () => {
    return (
        <div className={classes.socialNetworksLinksContainer}>
            <div className={classes.facebook}>
                <img alt={"facebook"} src={facebookImg} />
            </div>

            <div className={classes.twitter}>
                <img alt={"twitter"} src={twitterImg} />
            </div>

            <div className={classes.instagram}>
                <img alt={"instagram"} src={instagramImg} />
            </div>

            <div className={classes.pinterest}>
                <img alt={"pinterest"} src={pinterestImg} />
            </div>
        </div>
    )
}

export { SocialNetworksLinks }
