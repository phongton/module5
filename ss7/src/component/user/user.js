import {useDispatch, useSelector} from "react-redux";
import store from "../redux/Store";
import {deleteUserService} from "../../service/UserService";
import {deleteUserByMiddleware} from "../redux/middleware/UserMiddleware";

export default function UserList() {
   const users = useSelector(store=>store.users)
    const dispatch = useDispatch();
    console.log(users)
    if (!users || !Array.isArray(users)) {
        return <div>Loading...</div>;
    }

    const handleDelete = async (id) => {
        await dispatch(deleteUserByMiddleware(id))

    }

    return (
        <div>
            <h1>User list</h1>

            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            <button onClick={() => handleDelete(user.id)}>Delete user</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}