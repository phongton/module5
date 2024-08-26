const userReducer = (users = [], action) => {
    switch (action.type) {
        case "GET_ALL_USER":
            console.log(action.payload);
            return action.payload;
        case "DELETE_USER":
            return [...users,action.payload];
        default:
            return users;
    }
}

export default userReducer;
