import React, { useState } from 'react'
import { signin,authenticate } from '../auth/helper'

import Base from '../core/Base'


const Signin=()=> {

  const[values,setValues]=useState({
    email:"",
    password:"",
    error:"",
    loading:false,
    didRedirect:false
  })
  const {email,password,error,loading,didRedirect}=values;

  const handleChange=(name)=>event=>{
    setValues({...values, error:false, [name]:event.target.value})
  }

  const handleSubmit=event=>{
    event.preventDefault();
    setValues({...values,error:false,loading:true})
    signin({email,password})
    .then(data=>{
      if(data.error){
        setValues({...values,error:true,loading:false})
      }
      else{
        authenticate(data,()=>{
          setValues({...values,didRedirect:true})
        })

      }
    })
    .catch(console.log("signIn request failed"));

  }

  const successMsg=()=>{
    return(
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div className='alert alert-success' style={{display:success?"":"none"}}>
            New account was created successfully.
          </div>
        </div>
      </div>
    )
  }
  const errorMsg=()=>{
    return(
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
      <div className='alert alert-danger' style={{display:error?"":"none"}}>  
        {error}
      </div>
      </div>
      </div>
    )
  }

  const signInForm=()=>{
  return(
    <div className='row'>
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          
          <div className='form-group'>
            <label className='text-light'>Email</label>
            <input className='form-control' onChange={handleChange("email")} value={"email"} type="email"/>
          </div> 
          <div className='form-group'>
            <label className='text-light'>Password</label>
            <input className='form-control' onChange={handleChange("password")} value={"password"} type="password"/>
          </div>
          <button className='mt-4 btn btn-success btn-block' onClick={handleSubmit}>Submit</button>
        </form>

      </div>
    </div>
  )

  }
  
}

export default Signin
