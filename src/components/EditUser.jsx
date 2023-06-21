import { FormGroup, FormControl, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import { get_User, edit_User, getFirebaseKeys } from '../service/api';

const Form_Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div {
    margin-top: 20px;
}

& >p{
  font-size:3vw;
  @media only screen and (max-width: 700px) {
    font-size:5vw;
  }
  @media only screen and (max-width: 550px) {
    font-size:6vw;
  }
  @media only screen and (max-width: 380px) {
    font-size:8vw;
  }
}
`
const initialValues ={
  Name:'',
  email:'',
  phoneno:'',
  address:''
}

export default function EditUser() {

const {id} =useParams();
const [user, set_user] = useState(initialValues);

const navigate = useNavigate();
  
useEffect(() => {
  getFirebaseKeys()
    .then(keys => {
      const Key = keys[id];
      return getUserData(Key);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, [id]);

const getUserData = async (userKey) => {
  try {
    const response = await get_User(userKey);
    set_user(response);
  } catch (error) {
    console.log('Error while fetching user data', error.message);
  }
};

const onValuechange = (e)=>{
   set_user({...user,[e.target.name] : e.target.value}) // we write ...user so that previous value will be as it is and it wont be overwrite by new ones.
}// Note that if we want to use e.target.name (which is variable) as a key we must keep it in [] braces 


const editUserDetail = async () => {
  await getFirebaseKeys()
  .then(keys => {
    const Key = keys[id];
    edit_User(user, Key);
    console.log(Key);
    return getUserData(Key);
  })
  navigate('/all');
};

  return (
    <div>
      <Form_Container>
        <Typography>Edit user details</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange ={(e)=> onValuechange(e)} name='Name' value={user.Name}/>  
        </FormControl> 
            <FormControl>   
            <InputLabel>E-Mail</InputLabel>
            <Input onChange ={(e)=> onValuechange(e)} name='email' value={user.email}/>
        </FormControl>
            <FormControl>
            <InputLabel>Phone Number</InputLabel>
            <Input onChange ={(e)=> onValuechange(e)} name='phoneno' value={user.phoneno}/>
        </FormControl>
            <FormControl>
            <InputLabel>Address</InputLabel>
            <Input onChange ={(e)=> onValuechange(e)} name='address' value={user.address}/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>editUserDetail()}variant='contained'>Submit</Button>
        </FormControl>
      </Form_Container> 
    </div>
  )
}