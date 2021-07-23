import { useSelector } from 'react-redux';
import { selectUserById } from "../features/users/usersSlice";
import EditUserForm from '../features/users/EditUserForm';

export default function EditUserPage({ match }) {
    const { userId } = match.params;
    const user = useSelector(state => selectUserById(state, userId));

    return <EditUserForm {...user} />
}