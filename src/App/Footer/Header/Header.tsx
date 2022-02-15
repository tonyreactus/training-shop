import React from 'react';
import classes from "./Header.module.scss"
import { SocialNetworksLinks } from './SocialNetworksLinks/SocialNetworksLinks';

const Header = React.memo(() => {
    return (
        <div className={classes.header}>
            <span>{"Be in touch with us:"}</span>

            <div className={classes.joinUsContainer}>
                <div className={classes.inputContainer}>
                    <input placeholder={"Enter your email"} />
                </div>

                <div className={classes.buttonContainer}>
                    <button>
                        <span>{"Join us"}</span>
                    </button>
                </div>
            </div>

            <SocialNetworksLinks />
        </div>
    )
})

export { Header }