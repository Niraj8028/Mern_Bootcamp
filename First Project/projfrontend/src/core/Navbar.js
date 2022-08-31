import React from 'react'
import {Link, Navigate} from "react-router-dom";
import { isAuthenticated, signout } from '../auth/helper';


const currentTab=(path)=>{

    
    if( window.location.pathname===path){
        return {color: '#2ecc72'}
    }
    else{
        return {color: "#ffffff"}
    }
}

function Navbar() {
    // console.log("histort is:",history);
  return (
    <div>
        <ul className='nav nav-tabs bg-dark'>
            <li className="nav-item" >
                <Link style={currentTab("/")} className='nav-link' to="/">
                    Home
                </Link>
            </li> 
            <li className="nav-item">
                <Link style={  currentTab("/")} className='nav-link' to="">
                    Cart
                </Link>
            </li> 
            <li style={currentTab("/signout")} className="nav-item">
                <Link className='nav-link' to="/">
                    Dashboard
                </Link>
            </li> 
            <li style={currentTab("/")} className="nav-item">
                <Link className='nav-link' to="/">
                    Admin Dashboard
                </Link>
            </li> 
            <li style={currentTab("/signup")} className="nav-item">
                <Link className='nav-link' to="/signup">
                    Signup
                </Link>
            </li> 
            <li style={currentTab("/signin")} className="nav-item">
                <Link className='nav-link' to="/signin">
                    Signin
                </Link>
            </li> 
            
            {isAuthenticated() && (
                <li className='nav-item'><span className='nav-link text-danger'
                 onClick={()=>{
                    signout(()=>{
                        <Navigate to="/" />
                    })
                 }}>Logout</span>
                </li>
            )}
            
            
        </ul>
      
    </div>
  )
}

export default Navbar;
