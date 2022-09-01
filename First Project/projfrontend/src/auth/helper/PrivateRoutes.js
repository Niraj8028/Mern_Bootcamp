import React from "react";
import { Route, Navigate, Outlet} from "react-router-dom";
import { isAuthenticated } from "./index";
import Signin from "../../user/Signin";


const PrivateRoute=()=>{
  const isAuth=isAuthenticated();
  return isAuth?<Outlet/> : <Navigate to="/signin" />
}
  
  export default PrivateRoute;