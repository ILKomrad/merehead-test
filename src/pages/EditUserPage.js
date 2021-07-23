import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import { useTitle } from '../common/hooks';
import { selectUserById } from "../features/users/usersSlice";
import EditUserForm from '../features/users/EditUserForm';

export default function EditUserPage({ match }) {
    useTitle("Edit user");
    const { userId } = match.params;
    const user = useSelector(state => selectUserById(state, userId));

    return (
        <main>
            <Row justify="center" gutter={16}>
                <Col xs={23} sm={18} md={8}>
                    <EditUserForm {...user} />
                </Col>
            </Row>
        </main>
    )
}