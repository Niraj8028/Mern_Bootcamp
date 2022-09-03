import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base'
import { createCategory } from './helper/adminapicall';

function AddCategory() {
    const[name,setName]=useState("");
    const[error,setError]=useState(false);
    const[success,setSuccess]=useState(false);

    const {user,token}=isAuthenticated();
    // console.log("token is:" ,token);
    // console.log("id is:" ,user._id);
    // console.log("token is:" ,user.name);
    const goBack=()=>{
        
        return(
            <div className='mt-3'>
            
                <Link to="/admin/dashboard" className='btn btn-sm btn-secondary mb-3'>Go back</Link>
            </div>
        )
    }

    const handleChange=(event)=>{
        setError("");
        setName(event.target.value)
    }
    const handleClick=event=>{
        event.preventDefault();
        setError("")
        setSuccess(false)

        createCategory(user._id,token, {name})
            .then(data=>{
                if(data.error){
                    
                    setError(true)
                }
                else{
                    setName("")
                    setError("")
                    setSuccess(true)
                }
            })
            .catch(err=>{
                console.log(err);
            })
    }

    const successMsg=()=>{
        if(success){
            console.log("success");
            return(
                <h4 className='text-success'>Category was created successfully</h4>
            )
        }
        
    }
    const errorMsg=()=>{
        if(error){
            console.log("error");
            
            return(<h4 className='text-danger'>Failed to create category</h4>)
        }
        
    }


    const AddCategoryForm=()=>{
        return(
            <form>
                <div className='form-group'>
                    <p className='lead my-1'>Add the category</p>
                    <input type="text" className='form-control my-3'
                    autoFocus required onChange={handleChange} value={name} placeholder="For eg: Summer"
                    />
                    <button className='btn btn-success my-2' onClick={handleClick}>Add Category</button>
                </div>
            </form>
        )
    }

  return (
    <Base title='Add New Categoty Here' description='Add a new category for T-shirts' className='container bg-secondary p-4'>
        <div className='row bg-white rounded'>
            <div className='col-md-8 offset-md-2'>
                {errorMsg()}
                {successMsg()}
                {AddCategoryForm()}
                {goBack()}
            </div>
        </div>
    </Base>
  )
}

export default AddCategory
