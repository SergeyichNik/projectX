import classes from "./Footer.module.css";
import styleContainer from "../common/styles/container/Container.module.css";



export const Footer = () => {
    return (
        <div className={classes.mainWrapper}>
            <div className={`${styleContainer.container} ${classes.footerContainer}`}>
                <h2>Name Surname</h2>
                <div className={classes.links}>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                    <a href="#">link</a>
                </div>
                <span>&#169; 2022 All rights reserved</span>
            </div>
        </div>
    )
}