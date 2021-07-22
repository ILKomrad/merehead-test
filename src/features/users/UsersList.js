import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';

export default function UsersList() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.error);
    let inner;

    useEffect(() => {
        dispatch({type: "FETCH_ALL_USERS"});
    }, [dispatch]);

    if (error) {
        inner = <div>{error}</div>;
    } else {
        inner = <div>users list</div>
    }

    return (
        <section>
            <h3>users</h3>
            {inner}
        </section>
    )
}