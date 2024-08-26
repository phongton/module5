import {combineReducers} from "redux";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
    users: userReducer
    // teachers: teacherReducer,
    // products, productReducer,
    // username: usernameReducer
})

export default rootReducer;