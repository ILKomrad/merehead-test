import { useDispatch } from "react-redux";
import UserForm from './UserForm';

export default function AddUserForm() {
    const dispatch = useDispatch();
    
    const onFinish = values => {
        dispatch({type: "ADD_USER", payload: values});
    }
    
    return (
        <UserForm title="Add user" onSubmit={onFinish} />
    )
}