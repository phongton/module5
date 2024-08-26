import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector,Provider} from "react-redux";
import {useEffect} from "react";
import {getAllUserByMiddleware} from "./component/redux/middleware/UserMiddleware";
import UserList from "./component/user/user";
import store from "./component/redux/Store";
import {BrowserRouter} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  useEffect(() => {
    dispatch(getAllUserByMiddleware())
  }, []);
  return (
      <>
        <BrowserRouter>
            <div><p>{users.length}</p>

                <UserList/>

            </div>
        </BrowserRouter>
      </>
  );
}

export default App;
