import axios from 'axios';

export const getUserService = async () => {
    try {
        let response = await axios.get('http://localhost:8080/users');
        console.log(response.data);
        return response.data;
    } catch (error) {
        return []
    }
}
export const deleteUserService = async (id) => {
    try {
        await axios.delete('http://localhost:8080/users/' + id);
        return true
    } catch (e) {
        return false
    }
}

