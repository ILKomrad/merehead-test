import { useSelector } from 'react-redux';
import { selectUserById } from "./usersSlice";
import { Link } from "react-router-dom";

export default function User({ id }) {
    const user = useSelector(state => selectUserById(state, id));

    function onDelete() {}

    return (
        <article className="users-list__item">
            <h3>{user.name}</h3>
            <p>{user.surname}</p>
            <p>{user.desc}</p>
            <Link to={`/editUser/${user.id}`}>edit</Link>
            <button onClick={onDelete}>delete</button>
        </article>
    );
}