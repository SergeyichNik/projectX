import classes from "./Form.module.css";
import styleContainer from "../common/styles/container/Container.module.css";


export const Form = () => {
    return (
        <div className={classes.mainWrapper}>
            <div className={styleContainer.container}>
                <h2>Contacts</h2>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}