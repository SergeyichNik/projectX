import classes from "./MySkills.module.css";
import styleContainer from "../common/styles/container/Container.module.css"
import {SkillCard} from "./skillCard/SkillCard";
import {ProjectType} from "../projects/Projects";
import {FC} from "react";

type PropsType = {
    skills: ProjectType[]
}

export const MySkills: FC<PropsType> = ({skills}) => {
    const cards = []
    for (let i = 0; i <= 5; i++) {
        cards[i] = i;
    }
    return (
        <div className={classes.mainWrapper}>
            <div className={styleContainer.container}>
                <h2>My Skills</h2>
                <div className={classes.cardsWrapper}>
                    {skills.map((card, index) => <SkillCard key={index} {...card}/>)}
                </div>
            </div>
        </div>
    )
}