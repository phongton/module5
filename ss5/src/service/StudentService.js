import axios from "axios";
const URL_STUDENTS = "http://localhost:8080/students";
export const getAllStudents = async (name) => {
    try{
        let response = await axios.get(URL_STUDENTS+"?name_like="+name);

        return response.data;
    }catch (e){
        return []
    }
}
export const saveStudent = async (student) => {
    try{
        await axios.post(URL_STUDENTS, student)

        return true
    }catch(e){
        return false
    }
}
export const deleteStudent = async (id) => {
    try{
        await axios.delete(URL_STUDENTS+"/"+id);
        return true
    }catch (e){
        return false
    }
}
export const findStudent = async (id) => {
    try{
        let res=await axios.get(URL_STUDENTS+"/"+id);
        return res.data

    }catch (e){
        return []
    }
}