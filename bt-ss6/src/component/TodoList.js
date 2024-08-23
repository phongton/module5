import {useEffect, useState} from "react";
import * as todoService from "../service/TodoService";
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
function TodoList(){
    const [todos, setTodos] = useState([]);
    const [form,setForm] = useState({
        title : ""
    });

    useEffect(() => {
        getAllTodos()
    }, []);
    const getAllTodos = async () => {
        let res = await todoService.getAllTodos();
        setTodos(res);
    }

    function saveTodo(value) {
        value.completed = true;
        let isSuccess = todoService.createTodo(value)
        if (isSuccess) {
            setTodos([...todos,value])
            toast.success("thêm mới thành công")
        }else{
            toast.error("thêm mới thất bại ")
        }

    }

    return(
        <>
            <h1>TodoList</h1>
            <Formik initialValues={form} onSubmit={saveTodo}>
                <Form>
                    <div>
                    <label className="form-label">Nhập Công viêc </label>
                    <Field className="form-control" name="title"/>
                    </div>
                    <button className="btn btn-primary" type="submit">Thêm mới</button>
                </Form>
            </Formik>

            {todos.map((item) => (
                    <li key={item.id} className="list-group-item list-group-item-action" >{item.title}</li>)
                )}




        </>
    )
}
export default TodoList;