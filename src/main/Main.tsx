import classes from "./Main.module.css";
import styleContainer from "../common/styles/container/Container.module.css"


export const Main = () => {
    return (
        <div className={classes.mainWrapper}>
            <div className={`${styleContainer.container} ${classes.mainContainer}`}>
                <div className={classes.greetings}>
                    <span>Hi, there</span>
                    <h1>I am Name Surname</h1>
                    <span>Frontend developer</span>
                </div>
                <div className={classes.photo}>
                    photo
                </div>
            </div>
        </div>
    )
}