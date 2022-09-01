import React from "react";
import { Route,Navigate} from "react-router-dom";
import { isAuthenticated } from "./index";


const AdminRoutes = ({ component: Component, ...props }) => {   
    if (!Component) return null;
  
    return isAuthenticated() && isAuthenticated().user.role===1
      ? <Component {...props} />
      : <Navigate to="/signin" /> }
  
  export default AdminRoutes;