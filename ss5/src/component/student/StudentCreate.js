import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as studentService from "../../service/StudentService";
import * as classService from "../../service/ClassService";

function StudentCreate() {
    const [form, setForm] = useState({
        name: "",
        address: "",
        point: 0,
        class : 0,
        date: new Date().toISOString().split('T')[0],
    });
    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getClass();
    }, []);
    const getClass = async () => {
        let res = await classService.getClass()
        setClasses(res)

    }
    const objectValid = {

        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự"),
        address: Yup.string().required("Địa chỉ không được để trống")
            .min(3, "Địa chỉ phải có ít nhất 3 kí tự"),
        point: Yup.number().required("Điểm không được để trống")
            .min(0, "Điểm không được bé hơn 0")
            .max(11, "điểm không được vượt quá 10"),
        class: Yup.number().required("Lớp không được để trống")
            .positive("Chọn lớp học hợp lệ")
            .integer("Chọn lớp học hợp lệ"),


    }

    const saveStudent = async (value) => {
        // Check validate
        // useRef
        value.point = +value.point;
        value.class = +value.class
        let isSuccess = await studentService.saveStudent(value)
        if (isSuccess) {
            toast.success("Thêm mới thành công")
            navigate("/student")
        } else {
            toast.error("Thêm mới thất bại.")
        }
    }

    return (
        <>
            <h1 className="text-center mb-4" >Create Student</h1>
            <Formik initialValues={form} onSubmit={saveStudent} validationSchema={Yup.object(objectValid)}>
                <Form className="container">

                    <div className="mb-3">
                        <label className="form-label">Name </label>
                        <Field className="form-control" name="name"/>
                        <ErrorMessage className="error-message" name="name" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address </label>
                        <Field className="form-control" name="address"/>
                        <ErrorMessage className="error-message" name="address" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Class</label>
                        <Field as="select" className="form-control" name="class">
                            <option value="">Class Selection</option>
                            {classes.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage className="error-message" name="class" component="p"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Point </label>
                        <Field className="form-control" name="point"/>
                        <ErrorMessage className="error-message" name="point" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Registration date</label>
                        <Field type="date" className="form-control" name="date"/>
                        {/*<ErrorMessage className="error-message" name="date" component="p"></ErrorMessage>*/}
                    </div>
                    <div className="mb-3 text-center">
                    <button className="btn btn-primary w-50 mx-auto d-block custom-button" type="submit" >Submit</button>
                    </div>
                </Form>
            </Formik>
            {/*<form>*/}
            {/*    ID: <input onChange={(e) => setForm({...form, id: e.target.value})}/>*/}
            {/*    Name: <input onChange={(e) => setForm({...form, name: e.target.value})}/>*/}
            {/*    Address: <input onChange={(e) => setForm({...form, address: e.target.value})}/>*/}
            {/*    Point: <input type="number" onChange={(e) => setForm({...form, point: e.target.value})}/>*/}
            {/*    <button onClick={saveStudent}>Thêm mới</button>*/}
            {/*</form>*/}
        </>
    )
}

export default StudentCreate;