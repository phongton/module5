import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import * as studentService from "../../service/StudentService"
import {Link} from "react-router-dom";
function StudentListFunc() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");

    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(()=>{
        getAllStudents(name)
    },[name])
    const getAllStudents = async (name) => {
        let response = await studentService.getAllStudents(name)
        setStudents(response)
    }


    const handleDelete = (id) => {
       let isSuccess = studentService.deleteStudent(id)
       if (isSuccess) {
           setStudents(students.filter(student => student.id !== id))
           toast.success("Xoá thành công ")
       }else {
           toast.error("Xoá thất bại  ")
       }
    };
    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Point</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    students
                        .map((item, index) =>
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.point}</td>
                            <td>
                                <Link to={`/edit/${item.id}`} type = "button" className="btn btn-primary" >Edit</Link>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target={`#deleteModal${item.id}`} onClick={() => setSelectedStudent(item)}>
                                    Delete
                                </button>
                                {selectedStudent && selectedStudent.id === item.id && (
                                    <div className="modal fade show" id={`deleteModal${item.id}`} tabIndex="-1"
                                         aria-labelledby="deleteModalLabel"
                                         style={{display: 'block'}} aria-hidden="false">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="deleteModalLabel">Bạn có chắc muốn
                                                        xoá sinh viên: {item.name}?</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                            onClick={() => setSelectedStudent(null)}></button>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal"
                                                            onClick={() => setSelectedStudent(null)}>Close
                                                    </button>
                                                    <button type="button" className="btn btn-danger"
                                                            onClick={() => handleDelete(item.id)}>Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>

        </>
    )
}

export default StudentListFunc;