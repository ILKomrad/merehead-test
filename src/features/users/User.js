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
        <article className="users-list__item user">
            <img className="user__img" src={user.avatar || "./images/no-user-image.jpg"} />
            <div className="user__content">
                <div className="user__info">
                    <h3 className="user__name">{user.surname} {user.name}</h3>
                    <p className="user__desc">{user.desc}</p>
                </div>
                <footer>
                    <Button type="primary" onClick={onEdit}>edit</Button>
                    <Button danger type="primary" onClick={onDelete}>delete</Button>
                </footer>
            </div>
        </article>
    );
}