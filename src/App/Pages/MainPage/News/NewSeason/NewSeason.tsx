import React from 'react';
import news1Img from "../../../../../Assets/Images/news1.svg"
import classes from "./NewSeason.module.scss"

const NewSeason = () => {
    return (
        <div className={classes.newSeasonContainer}>
            <img alt={"new"} src={news1Img} />

            <div className={classes.textContainer}>
                <span className={classes.text1}>{"New season"}</span>
                <span className={classes.text2}>{"Lookbook collection"}</span>
            </div>
        </div>
    )
}

export { NewSeason }