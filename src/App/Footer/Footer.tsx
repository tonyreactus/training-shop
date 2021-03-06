import React from 'react';
import { Header } from './Header/Header';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { SubFooter } from './SubFooter/SubFooter';

const Footer = React.memo(() => {
    return (
        <div data-test-id={"footer"}>
            <Header />
            <NavigationMenu />
            <SubFooter />
        </div>
    )
})

export { Footer }