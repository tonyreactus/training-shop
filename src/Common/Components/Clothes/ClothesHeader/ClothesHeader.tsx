import React from 'react';
import { ClothesRoutePathTitleMap } from '../../../../Const/ClothesRoutePathMap';
import { EClothesRoutePath } from '../../../../Const/EClothesRoutePath';
import classes from "./ClothesHeader.module.scss"

type TClothesHeaderProps = {
    type: "women" | "men"
    title: string,
}

const ClothesHeader: React.FC<TClothesHeaderProps> = ({ title, type }) => {
    return (
        <div className={classes.clothesHeaderContainer}>
            <span className={classes.title}>{title}</span>

            <div className={classes.links}>
                {
                    Object
                        .keys(EClothesRoutePath)
                        .map((path, index) => (
                            <span key={index}>
                                {ClothesRoutePathTitleMap[path as EClothesRoutePath]}
                            </span>
                        ))
                }
            </div>
        </div>
    )
}

export { ClothesHeader }