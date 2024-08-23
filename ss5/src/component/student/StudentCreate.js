import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as studentService from "../../service/StudentService";
function StudentCreate() {
    const [form, setForm] = useState({
        name: "",
        address: "",
        point: 0
    });
    const navigate = useNavigate();

    const objectValid = {

        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự"),
        address: Yup.string().required("Địa chỉ không được để trống")
            .min(3,"Địa chỉ phải có ít nhất 3 kí tự"),
        point: Yup.number().required("Điểm không được để trống")
            .min(0,"Điểm không được bé hơn 0")
            .max(11,"điểm không được vượt quá 10")


    }

    const saveStudent = async (value) => {
        // Check validate
        // useRef
        value.point = +value.point
        let isSuccess = await studentService.saveStudent(value)
        if(isSuccess) {
            toast.success("Thêm mới thành công")
            navigate("/student")
        } else {
            toast.error("Thêm mới thất bại.")
        }
    }

    return (
        <>
            <Formik initialValues={form} onSubmit={saveStudent} validationSchema={Yup.object(objectValid)}>
                <Form className="container">

                    <div className="mb-3">
                        <label className="form-label">Nhập Tên  </label>
                        <Field className="form-control" name="name"/>
                        <ErrorMessage className="error-message" name="name" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nhập Địa chỉ   </label>
                        <Field className="form-control" name="address"/>
                        <ErrorMessage className="error-message" name="address" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nhập điểm  </label>
                        <Field className="form-control" name="point"/>
                        <ErrorMessage className="error-message" name="point" component="p"></ErrorMessage>
                    </div>

                    <button className="btn btn-primary" type="submit">Thêm mới</button>
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