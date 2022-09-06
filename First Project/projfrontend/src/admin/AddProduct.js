import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Base from '../core/Base'
import { getAllCategories } from './helper/adminapicall';


function AddProduct() {
    const [values, setvalues] = useState({
        name:"",
        description:"",
        price:"",
        stock:"",
        photo:"",
        categories:[],
        category:"",
        loading:false,
        error:false,
        createProduct:"",
        getRedirect:false,
        formdata:""

    })
const {name,description,price,stock,categories,category,loading,error,createProduct,getRedirect,formdata}=values;

    const preloadData=()=>{
        getAllCategories().then(data=>{
            if(data.error){
                setvalues({...values,error:data.error})
            }
            else{
                setvalues({...values,categories:data, formdata: new FormData()})
                
            }
        })
    }
    const handleChange=()=>{
        //
    }
    const onSubmit=()=>{
        //
    }
    useEffect(() => {
      preloadData(); 
    }, [])
    

    const createProductForm = () => (
        <form>
          <span>Post a Photo</span>
          <div className="form-group  bg-success mb-2 ">
            <label className="btn btn-block btn-success ">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group mb-2">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group mb-2">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group mb-2">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
        
       
          <div className="form-group mb-2">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Stock"
              value={stock}
            />
          </div>
    
          <button
            type="submit"
            onClick={onSubmit}
            className="text-white btn btn-outline-success mb-1"
          >
            Create Product
          </button>
        </form>
      );

  return (
    <Base title='Add a Product here!' description='Welcome to product creation section' className='container bg-info p-4' >
    <h1>Add a product</h1>
        <Link to="/admin/dashboard" className='btn btn-md btn-dark mb-3'>Admin Home</Link>
        <div className='row text-white bg-dark rounded'>
            <div className='col-md-8 offset-md-2'>
                {createProductForm()}
            </div>
        </div>
    </Base>
  )
}

export default AddProduct
