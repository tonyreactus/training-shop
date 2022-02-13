import React from 'react';
import { NewSeason } from './NewSeason/NewSeason';
import classes from "./News.module.scss"
import { Sale } from './Sale/Sale';

const News = () => {
    return (
        <div className={classes.newsContainer}>
            <NewSeason />
            <Sale />
        </div>
    )
}

export { News }