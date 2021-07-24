import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import UserForm from './UserForm';

export default function EditUserForm(user) {
    const dispatch = useDispatch();
    const history = useHistory();

    const onFinish = values => {
        history.push("/")
        dispatch({type: "EDIT_USER", payload: {...values, ...{id: user.id}}});
    }

    if (!user.id) {
        return <div></div>
    }
    
    return (
        <Fragment>
            <UserForm 
                btnTitle="Save"
                title="Edit user" 
                initialValues={user} 
                onSubmit={onFinish} />
            <Link to="/">Back</Link>
        </Fragment>
    )
}