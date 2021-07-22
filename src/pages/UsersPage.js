import { useTitle } from '../common/hooks';

import UsersList from '../features/users/UsersList';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UsersPage() {
    useTitle("Users");

    return (<main>
        <Container>
            <UsersList />
        </Container>
    </main>)
}