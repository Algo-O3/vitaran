import React,{ useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Importing components
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import Vitaran from "./components/Hero/Vitaran";
import EditUser from './components/EditUser';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';
import Logout from './components/Logout';

function App() {
  const[isLoggedin,setLoggedin] = useState(false);
  const a = false;

  const handelLog=(a)=>{
    if (a){setLoggedin(true);}
    else{setLoggedin(false)}
  }

  return (
    <BrowserRouter>
    {isLoggedin?(<Navbar flg={1}/>)
    :(<Navbar flg={0}/>)}
     <Routes>
     <Route path='/' element={<Vitaran/>}/>
     <Route path='/all'  element={<AllUser/>}/>
     <Route path='/sign_up' element={<AddUser/>}/>
     <Route path='/edit/:id' element={<EditUser/>}/>{/*We use : to declare that id is a variable*/}
     <Route path='/login' element={<Login handelLogin={handelLog}/>}/>
     <Route path='/log_out' element={<Logout handelLogout={handelLog}/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
