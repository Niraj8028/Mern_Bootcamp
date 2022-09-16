import React,{useState,useEffect} from 'react'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { getAllCategories, removeCategory } from './helper/adminapicall'
import { Link } from 'react-router-dom'

function ManageCategories() {
  const [ categories, setCategories] = useState([])
  const { user,token }=isAuthenticated();

  const loadAll=()=>{
    getAllCategories().then(data=>{
      if(data?.error){
        console.log(data.error)
      }
      else{
        setCategories(data)
      }
    })
  }
  

  useEffect(() => {
    loadAll();
  }, [])
  
  const deleteCategory=(category_id)=>{
    removeCategory(user._id,category_id,token).then(data=>{
      if(data && data.error){
        console.log(data.error)
      }
      else{
        loadAll();
      }
    })

  }

  return (
    <Base title="Welcome admin" description="Manage products here">
      <h2 className="mb-4">All products:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Total 3 products</h2>
            {categories.map((category,index)=>{
              console.log(index);
              return(
                <div key={index} className='row text-center mb-3'>
                  <div className='col-4'>
                    <h3 className='text-white text-left'>{category.name}</h3>
                  </div>
                  <div className='col-4'>
                    <span className=''></span>
                  </div>
                  <div className='col-4'>
                    <span className='btn btn-danger' onClick={deleteCategory(category._id)}>Delete</span>
                  </div>

                </div>
              )
            })}
            
          
        </div>
      </div>
    </Base>
  )
}

export default ManageCategories
