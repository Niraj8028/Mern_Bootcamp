import React from 'react'
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import Base from '../core/Base';

function AdminDashBoard() {

  const {user: {name,email,role}}=isAuthenticated();

  const adminLeftSide=()=>{
    return(
      <div className='card'>
        <h4 className='card-header bg-dark text-white'>Admin Navigation</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link to="/create/category" className='nav-link text-success ' >Create Categories</Link>
          </li>
          <li className='list-group-item'>
            <Link to="/create/product" className='nav-link text-success ' >Create Product</Link>
          </li>
          <li className='list-group-item'>
            <Link to="/category" className='nav-link text-success ' >Manage Product</Link>
          </li>
          <li className='list-group-item'>
            <Link to="/orders" className='nav-link text-success ' >Manage orders</Link>
          </li>
        </ul>
      </div>
    )
  }
  const adminRightSide=()=>{
    return(
      <div>
      </div>
    )
  }


  return (
    <Base title='Welcome to admin dashboard' description='Manage all of your products here'
     className='container bg-success p-4'>
      <div className='row'>
        <div className='col-3'>{adminLeftSide()}</div>
        <div className='col-9'>{adminRightSide()}</div>
      </div>
    </Base>
  )
}

export default AdminDashBoard;
