import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base'

function AddCategory() {
    const[name,setName]=useState("");
    const[error,setError]=useState(false);
    const[success,setSuccess]=useState(false);

    const {user,token}=isAuthenticated();

    const goBack=()=>{
        return(
            <div className='mt-3'>
                <Link to="/admin/dashboard" className='btn btn-sm btn-info mb-3'>Go back</Link>
            </div>
        )
    }

    const AddCategoryForm=()=>{
        return(
            <form>
                <div className='form-group'>
                    <p className='lead'>Add the category</p>
                    <input type="text" className='form-control my-3'
                    autoFocus required placeholder="For eg: Summer"
                    />
                    <div className='btn btn-success my-2'>Add Category</div>
                </div>
            </form>
        )
    }

  return (
    <Base title='Add New Categoty Here' description='Add a new category for T-shirts' className='container bg-secondary p-4'>
        <div className='row bg-white rounded'>
            <div className='col-md-8 offset-md-2'>{AddCategoryForm()} {goBack()}</div>
        </div>
    </Base>
  )
}

export default AddCategory
