import classes from "./SkillCard.module.css";
import {FC} from "react";

type PropsType = {
    img: string,
    title: string,
    desc: string
}

export const SkillCard: FC<PropsType> = ({img, desc, title}) => {
    return (
        <div className={classes.card}>
            <div className={classes.img}><span className={classes.span}>img</span></div>
            <h3>{title}</h3>
            <p className={classes.skillDesc}>{desc}</p>
        </div>
    )
}