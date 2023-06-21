import { FormGroup, FormControl, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { addUser } from '../service/api';

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
  address:'',
  password:''
}

export default function AddUser() {

const [user, set_user] = useState(initialValues);

const navigate = useNavigate();

const onValuechange = (e)=>{
   set_user({...user,[e.target.name] : e.target.value}) // we write ...user so that previous value will be as it is and it wont be overwrite by new ones.
}// Note that if we want to use e.target.name (which is variable) as a key we must keep it in [] braces 

const addUserDetail= async ()=>{
  await addUser(user);
  navigate('/login');
}

  return (
    <div>
      <Form_Container>
        <Typography>Add user details</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange ={(e)=> onValuechange(e)} name='Name' />  
        </FormControl> 
            <FormControl>   
            <InputLabel>E-Mail</InputLabel>
            <Input onChange ={(e)=> onValuechange(e)} name='email'/>
        </FormControl>
            <FormControl>
            <InputLabel>Phone Number</InputLabel>
            <Input onChange ={(e)=> onValuechange(e)} name='phoneno'/>
        </FormControl>
            <FormControl>
            <InputLabel>Address</InputLabel>
            <Input onChange ={(e)=> onValuechange(e)} name='address'/>
        </FormControl>
        <FormControl>
            <InputLabel>Password</InputLabel>
            <Input onChange ={(e)=> onValuechange(e)} name='password'/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>addUserDetail()}variant='contained'>Submit</Button>
        </FormControl>
      </Form_Container> 
    </div>
  )
}
