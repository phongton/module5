import axios from "axios";
const URL_STUDENTS = "http://localhost:8080/students";
export const getAllStudents = async (name,startDate,endDate) => {
    try{
        // let response = await axios.get(URL_STUDENTS+"?name_like="+name+"&date_gte="+startDate+"&date_lte="+endDate);
        // // let response = await axios.get(URL_STUDENTS+"?name_like="+name+"&date_gte="+startDate+"&date_lte="+endDate);
        // console.log(response.data)
        // return response.data;
        let response;
        if(startDate&&endDate){
            response = await axios.get(URL_STUDENTS+"?name_like="+name+"&date_gte="+startDate+"&date_lte="+endDate)
            return response.data
        }else {
            response = await axios.get(URL_STUDENTS+"?name_like="+name)
            return response.data
        }
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
export const updateStudent = async (data) => {
    try{
        await axios.put(URL_STUDENTS+`/${data.id}`,data);
        return true
    }catch(e){
        return false
    }
}