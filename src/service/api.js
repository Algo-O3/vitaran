import axios from 'axios';

const API_URL="https://vitaran-prj-001-default-rtdb.firebaseio.com/userData";


export const getFirebaseKeys =async()=>{
    try {
      const response = await fetch(`${API_URL}.json`, {
        method: 'GET',
      });
  
      if (response.ok) {
        const data = await response.json();
        const keys = Object.keys(data);
        return keys;
      } else {
        throw new Error('Error: ' + response.status);
      }
    } catch (error) {
      console.error('Error while calling the keys :', error);
    }
  }


export const addUser =async (data)=>{
    try{
        const {Name,email,phoneno,address, password} = data;
        if(Name && email && phoneno && address && password)
{       await fetch(`${API_URL}/.json`,
            {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
        body: JSON.stringify({
            Name,
            email,
            phoneno,
            address, 
            password,
        }
         ),
    }
            );}
      else{
        alert("No data is entered!")
      }
    //return await axios.post(API_URL,data);
    }catch(error) //Eception handling
    {    
    console.log('Error while calling addUser api ',error.message);
    }
}

export const getUsers =async ()=>{
    try{
        const response = await fetch(`${API_URL}.json`, {
      method: 'GET',
    });
    
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error: ' + response.status);
    }

    /*const responce = await axios.get(API_URL);
    return responce.data;*/
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}

export const get_User =async (key)=>{
    
    try{
        const response = await fetch(`${API_URL}/${key}.json`, {
            method: 'GET',
          });
          
          if (response.ok) {
            const data = await response.json();
            return data;
          } else {
            throw new Error('Error: ' + response.status);
          }
        /*const responce = await axios.get(`${API_URL}/${id}`);
        return responce.data;*/
        }catch(error){
            console.log('Error while calling getUsers api',error.message);
        }
}

export const edit_User= async (data,key)=>{
    try{
        const response = await fetch(`${API_URL}/${key}.json`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          if (response.ok) {
            const responseData = await response.json();
            return responseData;
          } else {
            throw new Error('Error: ' + response.status);
          }
        //return await axios.put(`${API_URL}/${id}`,data);
    }catch(error){
        console.log('Error while calling edit_User api',error.message);
    }
}

export const deleteUser = async (key)=>{
    try{
      const response = await fetch(`${API_URL}/${key}.json`,
      {
        method: "DELETE",
      }
      );
      const data = await response.json();
      return data;
        //return await axios.delete(`${API_URL}/${id}`);
    }catch(error){
        console.log("Error while calling deleteUser api",error.message);
    }
}