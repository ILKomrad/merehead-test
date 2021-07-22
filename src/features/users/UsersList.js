import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UsersList.css";

import { selectUsersIds } from "./usersSlice";
import User from './User';

export default function UsersList() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.error);
    const usersIds = useSelector(selectUsersIds);
    let inner;

    useEffect(() => {
        dispatch({type: "FETCH_ALL_USERS"});
    }, [dispatch]);

    if (error) {
        inner = <div>{error}</div>;
    } else {
        inner = usersIds.map(id => <User key={id} id={id} />);
    }

    return (
        <section>
            <h3>users</h3>
            <Row className="users-list">
                {inner}
            </Row>
        </section>
    )
}