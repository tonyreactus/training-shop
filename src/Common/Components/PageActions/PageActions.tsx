import React from 'react';
import classes from "./PageActions.module.scss";
import filterImg from "../../../Assets/Images/filter.svg";
import viewListImg from "../../../Assets/Images/viewList.svg";
import viewList2Img from "../../../Assets/Images/viewList2.svg"

const PageActions = () => {
    return (
        <div className={classes.pageActionsContainer}>
            <div className={classes.filterContainer}>
                <div className={classes.imgContainere}>
                    <img alt={"filter"} src={filterImg} />
                </div>
                <span>{"Filter"}</span>
            </div>

            <div className={classes.viewListsContainer}>
                <div className={classes.viewList1}>
                    <img alt={"viewList"} src={viewListImg} />
                </div>

                <div className={classes.viewList2}>
                    <img alt={"viewList"} src={viewList2Img} />
                </div>
            </div>
        </div>
    )
}

export { PageActions }