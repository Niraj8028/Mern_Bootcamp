import React, { Fragment } from 'react'
import {Link,  useNavigate} from "react-router-dom";
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
    let navigate = useNavigate();
  return (
    <div>
        <ul className='nav nav-tabs bg-dark'>
            <li className="nav-item" >
                <Link style={currentTab("/")} className='nav-link' to="/">
                    Home
                </Link>
            </li> 
            <li className="nav-item">
                <Link style={  currentTab("/cart")} className='nav-link' to="/cart">
                    Cart
                </Link>
            </li> 
            {isAuthenticated() && isAuthenticated().user.role=== 0 && (
                <li style={currentTab("/signout")} className="nav-item">
                <Link className='nav-link' to="/user/dashboard">
                    Dashboard
                </Link>
            </li>
            )}
            {isAuthenticated() && isAuthenticated().user.role===1 && (
                <li style={currentTab("/")} className="nav-item">
                <Link className='nav-link' to="/admin/dashboard">
                    Admin Dashboard
                </Link>
            </li>
            )}    
             
             

            {!isAuthenticated() && (<Fragment>
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
            </Fragment>)}
            
            {isAuthenticated() && (
                <li className='nav-item'><span className='nav-link text-danger'
                 onClick={()=>{
                    signout(()=>{
                        navigate("/");
                    })
                 }}>Logout</span>
                </li>
            )}
            
            
        </ul>
      
    </div>
  )
}

export default Navbar;
