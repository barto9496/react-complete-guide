import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card"
import classes from "./AddUser.module.css"

const AddUser = () => {
    return(
        <Card className={classes.input}>
            <form>
                <label htmlFor="userName">Username</label>
                <input type="text" id="userName"/>
                <label htmlFor="age">Age(years)</label>
                <input type="number" id="age"/>
                <Button buttonType="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser