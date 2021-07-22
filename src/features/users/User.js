import { useSelector } from 'react-redux';
import { selectUserById } from "./usersSlice";

export default function User({ id }) {
    const user = useSelector(state => selectUserById(state, id));

    return (
        <article className="users-list__item">
            {user.id}
        </article>
    );
}