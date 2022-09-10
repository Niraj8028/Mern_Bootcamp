import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from './auth/helper/PrivateRoutes';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';
import AdminRoutes from './auth/helper/AdminRoutes';
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/manageCategories';


import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/user/dashboard" element={<UserDashBoard/>}/>
        </Route>
         <Route element={<AdminRoutes/>}>
          <Route path="/admin/dashboard" element={<AdminDashBoard/>}/>
          <Route path="/admin/create/category" element={<AddCategory/>}/>
          <Route path="/admin/products" element={<ManageProducts/>}/>
          <Route path="admin/create/product" element={<AddProduct/>}/>
          <Route path="admin/update/product/:productId" element={<UpdateProduct/>}/>

        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
