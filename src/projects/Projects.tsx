import classes from "./Projects.module.css";
import styleContainer from "../common/styles/container/Container.module.css";
import {ProjectCard} from "./projectCard/ProjectCard";
import {FC} from "react";
 export type ProjectType = {
    img: string,
    title: string,
    desc: string
}
type PropsType = {
    projects: ProjectType[]
}

export const Projects: FC<PropsType> = ({projects}) => {
    return (
        <div className={classes.mainWrapper}>
            <div className={`${styleContainer.container} ${classes.projectsContainer}`}>
                <h2>My Projects</h2>
                <div className={classes.cardsWrapper}>
                    {projects.map((card , index)=><ProjectCard key={index} {...card}/>)}
                </div>
            </div>


        </div>
    )
}