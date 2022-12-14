import React, { useState } from 'react'
import { signin,authenticate, isAuthenticated } from '../auth/helper'
import {Navigate} from "react-router-dom"

import Base from '../core/Base'


const Signin=()=> {

  const[values,setValues]=useState({
    email:"1@gmail.com",
    password:"newuser3",
    error:"",
    loading:false,
    didRedirect:false
  })
  const {email,password,error,loading,didRedirect}=values;
  const user=isAuthenticated();

  const handleChange=(name)=>event=>{
    setValues({...values, error:false,loading:false, [name]:event.target.value})
  }

  const handleSubmit=event=>{
    event.preventDefault();
    setValues({...values,error:false,loading:true})
    signin({email,password})
    .then(data=>{
      if(data?.error){
        setValues({...values,error:data.error,loading:false})
      }
      else{
        authenticate(data,()=>{
          setValues({...values,didRedirect:true,loading:false})
        })

      }
    })
    .catch(err=> console.log(err))

  }

  const loadingMsg=()=>{
    return(
    loading && (<div className='alert alert-info'><h6>loading....</h6></div>))
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

  const performRedirect=()=>{
    if(didRedirect){
      if(user && user.role===1){
        return <Navigate to="/admin/dashboard"/>
      }
      else{
        return <Navigate to="/user/dashboard"/>
      }

    }
    if(isAuthenticated()){
      return <Navigate to="/" />
    }
  }

  const signInForm=()=>{
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <div class="d-grid gap-2">
                  <button onClick={handleSubmit} className="btn btn-success btn-block mt-3">
                    Submit
                   
                  </button>
                  </div>
          </form>
        </div>
      </div>
    );

  }
  return (
    <Base title="Sign In page" description="A page for user to sign in!">
      {loadingMsg()}
      {errorMsg()}
      {signInForm()}
      {performRedirect()}
      
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
  
}

export default Signin