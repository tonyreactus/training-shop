import React from 'react';
import { Categories } from './Categories/Categories';
import { ContactUs } from './ContactUs/ContactUs';
import { Information } from './Information/Information';
import classes from "./NavigationMenu.module.scss"
import { UsefulLinks } from './UsefulLinks/UsefulLinks';

const NavigationMenu = () => {
    return (
        <div className={classes.navigationMenuContainer}>
            <Categories />
            <Information />
            <UsefulLinks />
            <ContactUs />
        </div>
    )
}

export { NavigationMenu }