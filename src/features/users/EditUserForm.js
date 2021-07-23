import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import UserForm from './UserForm';

export default function EditUserForm(user) {
    const dispatch = useDispatch();

    const onFinish = values => {
        dispatch({type: "EDIT_USER", payload: {...values, ...{id: user.id}}});
    }

    if (!user.id) {
        return <div></div>
    }
    
    return (
        <Fragment>
            <UserForm title="Edit user" initialValues={user} onSubmit={onFinish} />
            <Link to="/">Back</Link>
        </Fragment>
    )
}