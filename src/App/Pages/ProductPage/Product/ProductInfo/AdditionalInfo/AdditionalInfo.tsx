import React from 'react';
import classes from "./AdditionalInfo.module.scss"

const AdditionalInfo = () => {
    return (
        <div className={classes.additionalInfoContainer}>
            <div className={classes.title}>
                <span>{"Additional info"}</span>
            </div>

            <div className={classes.addInfoContainer}>
                <div className={classes.parameter}>
                    <span className={classes.key}>{"Color:"}</span>
                    <span className={classes.value}>{"Blue, White, Black, Grey"}</span>
                </div>

                <div className={classes.parameter}>
                    <span className={classes.key}>{"Size:"}</span>
                    <span className={classes.value}>{"XS, S, M, L"}</span>
                </div>

                <div className={classes.parameter}>
                    <span className={classes.key}>{"Material:"}</span>
                    <span className={classes.value}>{"100% Plyester"}</span>
                </div>
            </div>
        </div>
    )
}

export { AdditionalInfo }