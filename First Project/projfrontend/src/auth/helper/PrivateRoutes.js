import React from "react";
import { Route, Navigate, Outlet} from "react-router-dom";
import { isAuthenticated } from "./index";



const PrivateRoute=()=>{
  const isAuth=isAuthenticated();
  return isAuth?<Outlet/> : <Navigate to="/signin" />
}
  
  export default PrivateRoute;