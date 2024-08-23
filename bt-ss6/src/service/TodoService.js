import axios from "axios";

export const getAllTodos = async () => {
    try {
        let response = await axios.get('http://localhost:8080/todo');
        return response.data;
    }catch (e){
        console.log(e);
    }
}
export const createTodo = async (data) => {
    try{
         await axios.post('http://localhost:8080/todo',data);
         return true
    }catch (e){
        return false
    }
}