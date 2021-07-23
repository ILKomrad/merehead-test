import { useSelector, useDispatch } from 'react-redux';
import { selectUserById } from "./usersSlice";
import { useHistory } from "react-router-dom";
import { Button } from 'antd';
import "./User.css";

export default function User({ id }) {
    const user = useSelector(state => selectUserById(state, id));
    const dispatch = useDispatch();
    const history = useHistory();

    function onDelete() {
        dispatch({type: "DELETE_USER", payload: id});
    }

    function onEdit() {
        history.push(`/editUser/${user.id}`);
    }

    return (
        <article className="users-list__item">
            <h3>{user.name}</h3>
            <p>{user.surname}</p>
            <p>{user.desc}</p>
            <footer>
                <Button type="primary" onClick={onEdit}>edit</Button>
                <Button danger type="primary" onClick={onDelete}>delete</Button>
            </footer>
        </article>
    );
}