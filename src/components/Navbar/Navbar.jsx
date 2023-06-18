import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom';


export default function Navbar(props) {

  const nav_Function =()=>{
    { if(props.flg === 1){
      return(
              <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark py-3" data-bs-theme="dark">
              <div className="container-fluid">
              <a className="navbar-brand" to="/">Vitaran</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-item active me-3" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-item active me-3" to="/all">All Users</Link>
              </li>
              </ul>
              <a className="btn btn-outline-light btn-sm me-3 active" role="button" aria-pressed="true" id='button'>
              <NavLink className="nav-link" to="/log_out">Log Out</NavLink>
              </a>
              </div>
              </div>
              </nav>
      )
      }
      else{ 
        return(
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark py-3" data-bs-theme="dark">
                <div className="container-fluid">
                <a className="navbar-brand" to="/">Vitaran</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-item active me-3" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-item active me-3" to="/login">All Users</Link>
                </li>
                </ul>
                <a className="btn btn-outline-light btn-sm me-2 active" role="button" aria-pressed="true" id='button'>
                <NavLink className="nav-link" to="/login">Log In</NavLink></a>
                <a className="btn btn-outline-light btn-sm me-3 active" role="button" aria-pressed="true" id='button'>
                <NavLink className="nav-link" to="/sign_up"> Sign Up</NavLink>
                </a>
                </div>
                </div>
                </nav>
      )
      }
      }
  }
  
  return (
<div>
  {nav_Function()}
</div>
  )
}
