import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base'
import { getAllCategories,getProduct,updateProduct } from './helper/adminapicall';


function UpdateProduct() {
    const [values, setValues] = useState({
        name:"",
        description:"",
        price:"",
        stock:"",
        photo:"",
        categories:[],
        category:"",
        loading:false,
        error:false,
        getRedirect:false,
        formData:new FormData()


    })
const {name,description,price,stock,categories,category,loading,error,createdProduct,getRedirect,formData}=values;

    const {user,token}=isAuthenticated();

    const preloadData=()=>{
        getProduct().then(data=>{
            if(data.error){
                console.log(data.error)
            }
            setValues({
                name:data.name,
                description:data.description,
                price:data.price,
                stock:data.stock,

            })
        })
    }
    useEffect(() => {
      preloadData(); 
  }, [])

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value; 
    formData.set(name, value);
    setValues({...values, [name]:value});
  };

    const onSubmit=(event)=>{
        event.preventDefault();
        setValues({...values,error:"",loading:true})
        updateProduct(user._id,token,formData).then(data=>{
          if(data.error){
            setValues({...values,error:data.error})
          }
          else{
            setValues({
              ...values,
              name:"",
              description:"",
              price:"",
              stock:"",
              createdProduct:data.name,
              loading:false
            })
          }
        })
    }

    

    const successMsg=()=>(
      <div className='alert alert-info mt-3' style={{display:createdProduct?"":"none"}}>
        <h4 >{createdProduct} was created succesfully</h4>
       </div>
    )
    const errorMsg=()=>{
      <div className='alert alert-danger mt-3' style={{display:error?"":"none"}}>
      <h4>Something went wrong..</h4></div>
    }

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
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
                
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
              
            ))}
        </select>
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
                {successMsg()}
                {errorMsg()}
                {createProductForm()}
            </div>
        </div>
    </Base>
  )
}

export default UpdateProduct
