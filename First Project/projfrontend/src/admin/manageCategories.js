import React,{useState,useEffect} from 'react'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'


function ManageCategories() {
  const [categories, setCategories] = useState([])
  const {user,token}=isAuthenticated();

  const loadAllCategories=()=>{

  }
  useEffect(() => {
    loadAllCategories();
  }, [])
  
  return (
    <Base>
      <h1>Assignment</h1>
    </Base>
  )
}

export default ManageCategories
