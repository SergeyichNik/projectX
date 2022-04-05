import classes from "./ProjectCard.module.css";
import {FC} from "react";

 type PropsType = {
    img: string,
    title: string,
    desc: string
}

export const ProjectCard: FC<PropsType> = ({img, desc, title}) => {
    return (
        <div className={classes.cardWrapper}>
            <div className={classes.projectImg}><a href="#">Follow the link</a></div>
            <div className={classes.descWrapper}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}