import React,{useState} from 'react'
import { FormGroup, FormControl, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import { getUsers } from '../service/api';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

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

const intialvalue ={
    email:'',
    password:''
}

const alertVal ={
  msg: 'Log In to access All Users',
  type:'primary'
}


export default function Login({handelLogin}) {

const [user_detail, getUser] = useState(intialvalue);
const [alert,setAlert] = useState(alertVal);

const navigate = useNavigate();

const onValuechange = (e)=>{
getUser( {...user_detail,[e.target.name]:e.target.value});
}


const logIn = async ()=>{
  try{
  const response = await getUsers();
  const responseData = response; 

  let userFound = false;
  for (const val of Object.values(responseData)) {
    if (val.email === user_detail.email && val.password === user_detail.password) {
      userFound = true;
      break;
    }
  }


  /*const userFound = responseData.some((user) => {
    return user.email === user_detail.email && user.password === user_detail.password;
  });*/

    if(userFound)
    {
      handelLogin(true);
    }
if (userFound){
  navigate('/all')
}

else {
  setAlert({
    msg: 'User not found please try again',
    type: 'danger'
  })
}

setTimeout(() => {
  setAlert({});
}, 2000);

  }
  catch(error){
    console.log("Error fetching user data:",error);
  }

}


  return (
    <div>
      <Alert alt={alert}/>
        <Form_Container>
        <Typography>Hello User!</Typography>
        <FormControl>
            <InputLabel>E-Mail</InputLabel>
            <Input onChange={(e)=>onValuechange(e)} name='email'/>  
        </FormControl> 
            <FormControl>   
            <InputLabel >Password</InputLabel>
            <Input onChange={(e)=>onValuechange(e)} name='password'/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>logIn()} variant='contained'>Log In</Button>
        </FormControl>
      </Form_Container>
      
    </div>
  )
}

