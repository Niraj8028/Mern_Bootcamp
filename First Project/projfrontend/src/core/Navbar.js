import React from 'react'
import {Link} from "react-router-dom";



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
                <Link style={  currentTab("/abc")} className='nav-link' to="/abc">
                    Cart
                </Link>
            </li> 
            <li style={currentTab("/signout")} className="nav-item">
                <Link className='nav-link' to="/signout">
                    Dashboard
                </Link>
            </li> 
            <li style={currentTab("/")} className="nav-item">
                <Link className='nav-link' to="/">
                    Admin Dashboard
                </Link>
            </li> 
            <li style={currentTab("/")} className="nav-item">
                <Link className='nav-link' to="/">
                    Signup
                </Link>
            </li> 
            <li style={currentTab("/")} className="nav-item">
                <Link className='nav-link' to="/">
                    Signin
                </Link>
            </li> 
            <li style={currentTab("/")} className= "nav-item">
                <Link className='nav-link' to="/">
                    Logout
                </Link>
            </li> 
        </ul>
      
    </div>
  )
}

export default Navbar;
