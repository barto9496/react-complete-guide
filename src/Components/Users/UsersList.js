import React from "react"
import Card from "../UI/Card"
import classes from "./UsersList.module.css"
import User from "./User"

const UsersList = (props) => {
    const onDeleteHandler = (id) => {
        props.onDelete(id)
    }

    return (
        <Card className={classes.users}>
            <ul>
                {props.usersList.map(user => {
                    return <User key={user.id} id={user.id} onDelete={onDeleteHandler}>
                        {`${user.name} is ${user.age} years of age`}
                    </User>
                })}
            </ul>
        </Card>
    )
}

export default UsersList