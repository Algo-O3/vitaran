import { useEffect, useState } from 'react';
import {Table, TableBody, TableHead,TableRow,TableCell, styled, Button} from '@mui/material'
import { getUsers, deleteUser } from '../service/api';
import {Link} from 'react-router-dom';

const TableContainer = styled(Table)`
width: 90%;
margin: 0.75vw auto 0vw auto;

@media only screen and (max-width: 890px) {
    width:100%;
  }
`

const Thead =styled(TableRow)`
background: #000;
& > th{
    font-size: 1.25vw;
    color: #ffffff;
    @media only screen and (max-width: 558px) {
        font-size:2.5vw;
      }
      @media only screen and (max-width: 350px) {
        font-size:4.5vw;
      }
      
}
`
const TBody = styled(TableBody)`
& >tr{& > td{font-size: 1vw;
    @media only screen and (max-width: 558px) {
        font-size:2vw;
      }
      @media only screen and (max-width: 350px) {
        font-size:4vw;
      }
}}
`
const Btnn = styled(Button)`
margin-right:0.25vw;
margin-bottom:0.25vw;
font-size:1vw;
@media only screen and (max-width: 558px) {
font-size:2vw;
margin-right:0vw;
margin-bottom:0.25vw;
  }
  @media only screen and (max-width: 350px) {
    font-size:4vw;
    margin-right:0vw;
    margin-bottom:0.25vw;
      }
`
const AllUser = ()=>
{

    const [users,getUser] = useState([]);

    useEffect(()=>{
        getUserDetails();
    },[]
    )

    const getUserDetails = async()=>{
     let responce = await getUsers();
     getUser(responce.data);
    }

    const deleteUserData = async (id)=>{
     await  deleteUser(id);
     getUserDetails();
    }
    return (
        <div>
        <TableContainer>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>E-Mail</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell></TableCell>

                </Thead>
            </TableHead>
            <TBody>
                 {
                    users.map(user=>(
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phoneno}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>
                                <Btnn variant="outlined" sx={{color:'white',backgroundColor:'#008a00', borderColor:'black', ":hover":{backgroundColor:'#007000'}}} component={Link} to={`/edit/${user.id}`}>
                                Edit
                                </Btnn>
                                <Btnn variant="outlined" sx={{color:'white',backgroundColor:'red', borderColor:'black', ":hover":{backgroundColor:'#a60000'}}} onClick={()=> deleteUserData(user.id)}>
                                Delete
                                </Btnn>
                            </TableCell>
                        </TableRow>
                    ))
                 }
            </TBody>
        </TableContainer>
        </div>  
    )
}

export default AllUser;