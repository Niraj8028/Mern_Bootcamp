import React from "react";
import { Route,Navigate,Outlet} from "react-router-dom";
import { isAuthenticated } from "./index";


const AdminRoutes=()=>{
  const isAuth=isAuthenticated();
  return isAuthenticated() && isAuthenticated().user.role===1?<Outlet/> : <Navigate to="/signin" />
}
  
  export default AdminRoutes;