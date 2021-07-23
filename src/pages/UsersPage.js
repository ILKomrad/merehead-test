import { useTitle } from '../common/hooks';
import UsersList from '../features/users/UsersList';
import AddUserForm from '../features/users/AddUserForm';
import { Row, Col } from 'antd';

export default function UsersPage() {
    useTitle("Users");

    return (
        <main>
            <Row justify="center" gutter={16}>
                <Col xs={23} sm={18} md={8}>
                    <AddUserForm />
                </Col>
                <Col xs={23} md={12}>
                    <UsersList />
                </Col>
            </Row>
        </main>
    )
}