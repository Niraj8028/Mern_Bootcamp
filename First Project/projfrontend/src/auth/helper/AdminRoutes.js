import React from "react";
import { Route} from "react-router-dom";
import { isAuthenticated } from "./index";


const adminRoute = ({ component: Component, ...props }) => {   
    if (!Component) return null;
  
    return isAuthenticated() && isAuthenticated().user.role===1
      ? <Component />
      : <Navigate to="/signin" /> }
  
  export default adminRoute;