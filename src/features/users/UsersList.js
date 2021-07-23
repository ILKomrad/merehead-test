import { useMemo } from "react"
import { useSelector } from "react-redux";
import { Row } from 'antd';

import User from './User';
import Paginator from '../../common/components/Paginator';
import { selectUsersIds } from "./usersSlice";
import { usePageNumber } from '../../common/hooks';
import { getMaxPage } from '../settings/settingsSlice';
import "./UsersList.css";

export default function UsersList() {
    const max = useSelector(getMaxPage);
    const error = useSelector(state => state.users.error);
    const active = usePageNumber();
    const usersIds = useSelector(selectUsersIds);
    const selectedIds = useMemo(
        () => {
            const start = (active - 1) * max;
            return usersIds.slice(start, start + max)
        }, 
        [active, usersIds, max]
    );
    const countPages = Math.ceil(usersIds.length / max)
    let inner;

    if (error) {
        inner = <div>{error}</div>;
    } else {
        inner = selectedIds.map(id => (
            <User key={id} id={id} />
        ));
    }

    return (
        <section className="usersList">
            <Row justify="center">
                <h3 className="usersList__title">users</h3>
            </Row>
            <div className="users-list"></div>
            <div className="usersList">
                {inner}
            </div>
            <Row justify="center">
                <Paginator countPages={countPages} />
            </Row>
        </section>
    )
}