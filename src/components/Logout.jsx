import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout({handelLogout}) {

    const navigate = useNavigate();

    const logOut =()=>
    {
     handelLogout(false);
    }
    logOut();
    navigate('/')

  return (
    <div>
    </div>
  )
}
