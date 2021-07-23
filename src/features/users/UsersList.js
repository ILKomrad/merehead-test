import { useMemo } from "react"
import { useSelector } from "react-redux";
import { Row, Col } from 'antd';

import { selectUsersIds } from "./usersSlice";
import { usePageNumber } from '../../common/hooks';
import Paginator from '../../common/components/Paginator';
import { getMaxPage } from '../settings/settingsSlice';
import User from './User';
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
            <Row key={id} justify="center" gutter={16}>
                <Col xs={24} md={6} sm={8}>
                    <User key={id} id={id} />
                </Col>
            </Row>
        ));
    }

    return (
        <section>
            <Row justify="center">
                <h3>users</h3>
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