import React, { useState } from 'react'
import Base from '../core/Base'
import { signup } from '../auth/helper';

const Signup=()=>{
  const[values, setValues]=useState({
    name:"",
    email:"",
    password:"",
    error:"",
    success:false
  });

  const{name,email,password,error,success}=values;

  const handleChange=(name)=>event=>{
    setValues({...values, error:false, [name]:event.target.value})
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setValues({...values, error:false})
    signup({name,email,password})
    .then(data=>{
      if(data?.error){
        setValues({...values,error:data.error,success:false})
      }
      else{
        setValues({...values,name:"",email:"",password:"",error:"",success:true})
      }

    })
    .catch(console.log("error in signup"));
  };
  const signupForm=()=>{
 
    return(
      <div className='row'>
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className='form-group'>
              <label className='text-light'>Name</label>
              <input className='form-control' onChange={handleChange("name")} type="text" value={name}/>
            </div>
            <div className='form-group'>
              <label className='text-light'>Email</label>
              <input className='form-control' onChange={handleChange("email")} type="email" value={email}/>
            </div> 
            <div className='form-group'>
              <label className='text-light'>Password</label>
              <input className='form-control' onChange={handleChange("password")} type="password" value={password}/>
            </div>
            <button className='btn mt-3 btn-success btn-block' onClick={handleSubmit}>Submit</button>
          </form>
  
        </div>
      </div>
    )
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

  return (
    <Base title='A signout Page' description='A page for user signup'>
        {successMsg()}
        {errorMsg()}
        {signupForm()}
        <p className='text-white text-center'>{JSON.stringify(values)}</p>
    </Base>
  );
  };

export default Signup
