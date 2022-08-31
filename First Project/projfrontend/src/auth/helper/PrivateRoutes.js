import React from "react";
import { Route ,} from "react-router-dom";
import { isAuthenticated } from "./index";


const PrivateRoute = ({ component: Component, ...props }) => {   
    if (!Component) return null;
  
    return isAuthenticated()
      ? <Component />
      : <Navigate to="/signin" /> }
  
  export default PrivateRoute;