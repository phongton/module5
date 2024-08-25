import {useEffect, useState} from "react";
import * as studentService from "../../service/StudentService"
import {useNavigate, useParams} from "react-router-dom";
import *as studentList from "../../component/student/StudentListFunc";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import * as classService from "../../service/ClassService"
function StudentEdit() {
    const {id} = useParams();
   const [studentData, setStudentData] = useState();
   const [classes , setClasses] = useState([]);

   const navigate = useNavigate();
    useEffect(() => {
    studentService.findStudent(parseInt(id)).then(r => setStudentData(r));
    getClass();

    }, [id]);
    const getClass = async () => {
        let res = await classService.getClass()
        setClasses(res)

    }
    function updateStudent(value) {

        value.point = +value.point;
        value.class = +value.class
    let success = studentService.updateStudent(value)
        if (success){
            navigate("/student")
            toast.success("Cập nhật thành công")
        }else{
            toast.error("Cập nhật thất bại")
        }

    }
    const objectValid = {
        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự"),
        address: Yup.string().required("Địa chỉ không được để trống"),
        point: Yup.number().required("Điểm không được để trống")
            .min(0, "Điểm không được bé hơn 0")
            .max(10, "Điểm không được vượt quá 10"),
        class: Yup.number().required("Lớp không được để trống")
            .positive("Chọn lớp học hợp lệ")
            .integer("Chọn lớp học hợp lệ"),
    };
        if(!studentData){ return <div>Loading....</div>}
    return (
        <>
            <h1 className="text-center mb-4">Edit Student</h1>
            <Formik
                initialValues={studentData}
                onSubmit={updateStudent}
                validationSchema={Yup.object(objectValid)}
            >
                <Form className="container">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <Field name="name" className="form-control"/>
                        <ErrorMessage name="name" component="p" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address:</label>
                        <Field name="address" className="form-control"/>
                        <ErrorMessage name="address" component="p" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="class" className="form-label">Class:</label>
                        <Field as="select" name="class" className="form-control">
                            <option value="">Class selection</option>
                            {classes.map(cls => (
                                <option key={cls.id} value={cls.id}>{cls.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="class" component="p" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="point" className="form-label">Point:</label>
                        <Field name="point" className="form-control"/>
                        <ErrorMessage name="point" component="p" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Registration date</label>
                        <Field type="date" className="form-control" name="date"/>
                        {/*<ErrorMessage className="error-message" name="date" component="p"></ErrorMessage>*/}
                    </div>
                    <button type="submit" className="btn btn-primary w-50 mx-auto d-block custom-button">Submit</button>
                </Form>
            </Formik>
        </>
    );


}

export default StudentEdit;