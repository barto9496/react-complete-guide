const User = (props) => {

    const onDeleteHandler = () =>{
        props.onDelete(props.id)
    }

    return( 
    <li onClick={onDeleteHandler}>
        {props.children}
    </li>
    )
}

export default User