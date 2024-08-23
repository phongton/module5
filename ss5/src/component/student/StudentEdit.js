import {useEffect, useState} from "react";
import * as studentService from "../../service/StudentService"
import {useParams} from "react-router-dom";
import *as studentList from "../../component/student/StudentListFunc";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
function StudentEdit() {
    const {id} = useParams();
   const [studentData, setStudentData] = useState();

    useEffect(() => {
    studentService.findStudent(parseInt(id)).then(r => setStudentData(r))
    }, [id]);

    function updateStudent() {

    }
    const objectValid = {
        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự")
    };

    return (
        <Formik
            initialValues={studentData}
            onSubmit={updateStudent}
            validationSchema={Yup.object(objectValid)}
        >
            <Form className="form-horizontal p-4 bg-light border rounded mx-auto" style={{ maxWidth: "400px" }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <Field name="name" className="form-control"/>
                    <ErrorMessage name="name" component="p" className="text-danger"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <Field name="address" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="point" className="form-label">Point:</label>
                    <Field name="point" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary w-50 mx-auto d-block">Cập nhật</button>
            </Form>
        </Formik>
    );



}
export default StudentEdit;