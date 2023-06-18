import axios from 'axios';

const API_URL='http://localhost:3002/user';

export const addUser =async (data)=>{
    try{
    return await axios.post(API_URL,data);
    }catch(error) //Eception handling
    {    
    console.log('Error while calling addUser api',error.message);
    }
}

export const getUsers =async ()=>{
    try{
    return await axios.get(API_URL);
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}

export const get_User =async (id)=>{
    try{
    return await axios.get(`${API_URL}/${id}`);
    }catch(error){
        console.log('Error while calling get_User api',error.message);
    }
}

export const edit_User= async (data,id)=>{
    try{
        return await axios.put(`${API_URL}/${id}`,data);
    }catch(error){
        console.log('Error while calling edit_User api',error.message);
    }
}

export const deleteUser = async (id)=>{
    try{
        return await axios.delete(`${API_URL}/${id}`);
    }catch(error){
        console.log("Error while calling deleteUser api",error.message);
    }
}