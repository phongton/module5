import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";

function Medical() {
    const [form, setForm] = useState({
        name:"",
        id:"",
        birthYear:"",
        gender:"",
        nationality:"",
        isHealthInsuranceCard:"",
        company:"",
        department:"",
        city:"",
        district:"",
        village:"",
        address:"",
        phone:"",
        email:"",
        isFever:"",
        isCough:"",
        isLowBreath:"",
        isPneumonia:"",
        isSoredThroat:"",
        isTired:"",
        visitingCountries:"",
        isContactedF0:"",
        isContactedForeign:"",
        isContactedSuspected:""
    });

    const objectValid = {
        name:Yup.string().required("Required"),
        id:Yup.string().required("Required"),
        birthYear:Yup.number().required("Required")
            .min(1990).required("Birth year must be higher than 1990"),
        gender:Yup.string().required("Required"),
        nationality:Yup.string().required("Required"),
        province: Yup.string().required("Required"),
        district: Yup.string().required("Required"),
        village: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
        email: Yup.string().required("Required")
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/).required("email is invalid"),
    }
    const saveInfo = (e) => {

        alert("Information is saved successfully")
    }

    return (
        <>
            <Formik initialValues={form} onSubmit={saveInfo} validationSchema={Yup.object(objectValid)}>
                <Form className='container mt-5 shadow-sm p-3 rounded w-50 bg-white'>
                    <h1>Tờ khai y tế</h1>
                    <div className='mb-3'>
                        <label className='form-label'>Họ tên:</label>
                        <Field className='form-control' name="name"/>
                        <ErrorMessage className='text-danger' name="name" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Số hộ chiếu:</label>
                        <Field className='form-control' name="id"/>
                            <ErrorMessage className='text-danger' name="id" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Năm sinh:</label>
                        <Field className='form-control' name="birthYear"/>
                        <ErrorMessage className='text-danger' name="birthYear" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Giới tính:</label>
                        <span className='p-3'><Field className='radio-inline ml-3' name="gender" value='Male'
                                                     type='radio'/> Male</span>
                        <span className='p-3'><Field className='radio-inline ml-3' name="gender" value='FeMale'
                                                     type='radio'/> FeMale</span>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Quốc tịch:</label>
                        <Field className='form-control' name="nationality"/>
                        <ErrorMessage className='text-danger' name="nationality" component="p"></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Công ty làm việc:</label>
                        <Field className='form-control' name="company"/>
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Bộ phận làm việc:</label>
                        <Field className='form-control' name="department"/>
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Có thẻ bảo hiểm y tế:</label>
                        <Field className='radio-inline ml-3' name="isHealthInsuranceCard" type='checkbox'/>
                    </div>
                    <h3>Địa chỉ liên hệ tại Việt Nam</h3>
                    <div className="mb-3">
                        <label className='form-label'>Tỉnh/thành:</label>
                        <Field className='form-control' name="city"/>
                        <ErrorMessage className='text-danger' name="province" component="p"></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Quận/huyện:</label>
                        <Field className='form-control' name="district"/>
                        <ErrorMessage className='text-danger' name="district" component="p"></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Phường/xã:</label>
                        <Field className='form-control' name="village"/>
                        <ErrorMessage className='text-danger' name="village" component="p"></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Số nhà, phố, tổ dân phố /thôn /đội:</label>
                        <Field className='form-control' name="address"/>
                        <ErrorMessage className='text-danger' name="address" component="p"></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Điện thoại:</label>
                        <Field className='form-control' name="phone"/>
                        <ErrorMessage className='text-danger' name="phone" component="p"></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Email:</label>
                        <Field className='form-control' name="email" type="email"/>
                        <ErrorMessage className='text-danger' name="email" component="p"></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <h3>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lãnh thổ nào (Có thể đi qua nhiều
                            quốc gia)</h3>
                        <Field className='form-control' name="visitingCountries" type="textarea"/>
                    </div>
                    <div className="mb-3">
                        <h3>Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu nào
                            sau đây không?</h3>
                        <div><Field className='radio-inline ml-3' name="isFever" type='checkbox'/> Sốt</div>
                        <div><Field className='radio-inline ml-3' name="isCough" type='checkbox'/> Ho</div>
                        <div><Field className='radio-inline ml-3' name="isLowBreath" type='checkbox'/> Khó thở</div>
                        <div><Field className='radio-inline ml-3' name="isPneumonia" type='checkbox'/> Viêm phổi</div>
                        <div><Field className='radio-inline ml-3' name="isSoredThroat" type='checkbox'/> Đau họng</div>
                        <div><Field className='radio-inline ml-3' name="isTired" type='checkbox'/> Mệt mỏi</div>
                    </div>

                    <div className="mb-3">
                        <h3>Trong vòng 14 ngày qua, Anh /Chị
                            có tiếp súc với?</h3>
                        <div><Field className='radio-inline ml-3' name="isContactedF0" type='checkbox'/>Người bệnh hoặc nghi
                            ngờ, mắc bệnh
                            COVID-19
                        </div>
                        <div><Field className='radio-inline ml-3' name="isContactedForeign" type='checkbox'/>Người từ nước có bệnh
                            COVID-19
                        </div>
                        <div><Field className='radio-inline ml-3' name="isContactedSuspected" type='checkbox'/>Người có biểu hiện
                            (Sốt, ho, khó thở, viêm phổi)
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className='btn btn-primary btn-sm w-50' type="submit">Create</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default Medical;