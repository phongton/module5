import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"

function FormContact() {
    const[form,setForm] = useState({
        name:'',
        email:'',
        phone:'',
        message:'',
    })
    const objectValid = {
        name:Yup.string().required("Required"),
        email:Yup.string().required("Required")
            .matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+$/).required("Email is invalid"),
        phone:Yup.string().required("Required")
            .matches(/^[0-9]{10}$/).required("Phone is invalid")
    }
    const saveContact = ()=>{

        alert("Add contact successfully")
    }

    return(
        <>
            <Formik initialValues={form} onSubmit={saveContact} validationSchema={Yup.object(objectValid)}>
                <Form className='container mt-5 shadow-sm p-3 rounded w-25 bg-white'>
                    <h3 className='text-center'>Contact Form</h3>
                    <div className="mb-3">
                        <label className='form-label'>Name:</label>
                        <Field className="form-control" name="name"/>
                        <ErrorMessage className='text-danger' name="name" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Email:</label>
                        <Field className="form-control" name="email"/>
                        <ErrorMessage className='text-danger' name="email" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Phone:</label>
                        <Field className="form-control" name="phone"/>
                        <ErrorMessage className='text-danger' name="phone" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Message:</label>
                        <Field className="form-control" name="message" as='textarea'/>
                        <ErrorMessage className='text-danger' name="message" component="p"></ErrorMessage>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-sm btn-primary w-50' type='submit'>Add</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default FormContact;