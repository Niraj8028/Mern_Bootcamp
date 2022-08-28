import React from 'react'
import Base from '../core/Base'

const signupForm=()=>{
 
    return(
      <div className='row'>
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className='form-group'>
              <label className='text-light'>Name</label>
              <input className='form-control' type="text"/>
            </div>
            <div className='form-group'>
              <label className='text-light'>Email</label>
              <input className='form-control' type="email"/>
            </div> 
            <div className='form-group'>
              <label className='text-light'>Password</label>
              <input className='form-control' type="password"/>
            </div>
            <button className='btn mt-3 btn-success btn-block'>Submit</button>
          </form>
  
        </div>
      </div>
    )
  }


function Signup() {
  return (
    <Base title='A signout Page' description='A page for user signup'>
        

        {signupForm()}
    </Base>
  )
}

export default Signup
