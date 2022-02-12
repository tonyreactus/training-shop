import React from 'react';
import { actions } from '../../../../MockApi/Actions';
import classes from "./Actions.module.scss"

const Actions = () => {
    return (
        <div className={classes.actionsContainer}>
            {
                actions.map(({ name, image }, index) => (
                    <div key={index} className={classes.imgContainer}>
                        <img alt={name} src={image} />
                    </div>
                ))
            }
        </div>
    )
}

export { Actions }