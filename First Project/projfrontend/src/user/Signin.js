import React from 'react'
import Base from '../core/Base'

const signInForm=()=>{
  return(
    <div className='row'>
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          
          <div className='form-group'>
            <label className='text-light'>Email</label>
            <input className='form-control' type="email"/>
          </div> 
          <div className='form-group'>
            <label className='text-light'>Password</label>
            <input className='form-control' type="password"/>
          </div>
          <button className='mt-4 btn btn-success btn-block '>Submit</button>
        </form>

      </div>
    </div>
  )
}

function Signin() {
  return (
    <Base title='A signin Page' description='A page for signin'>
    
    {signInForm()};
    </Base>
  )
}

export default Signin
