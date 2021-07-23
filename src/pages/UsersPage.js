import { useTitle } from '../common/hooks';
import UsersList from '../features/users/UsersList';
import AddUserForm from '../features/users/AddUserForm';

export default function UsersPage() {
    useTitle("Users");

    return (
        <main>
            <AddUserForm />
            <UsersList />
        </main>
    )
}