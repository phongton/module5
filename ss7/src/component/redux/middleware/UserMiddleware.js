import * as userService from '../../../service/UserService.js'
export const getAllUserByMiddleware = () => async (dispatch) => {
    const data = await userService.getUserService();
    dispatch({
        type: "GET_ALL_USER",
        payload: data
    });
};
export const deleteUserByMiddleware = (id) => async (dispatch) => {
    try {
        await userService.deleteUserService(id);
        dispatch({
            type: "DELETE_USER",
            payload: ""
        })
        dispatch(getAllUserByMiddleware(""))
        return true
    }catch(err) {
        return false
    }
}

