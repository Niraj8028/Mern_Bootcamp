import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import { addItemToCart,removeItemFromCart } from './helper/CartHelper'

import Image from './helper/Image'

function Card({product, 
              addtoCart=true, 
              removeFromCart=false,                
              setReload=(f)=>f,
              reload=undefined}) {

    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const cartTitle  = product ? product.name: "A photo from Pexels"
    const cartDescription  = product ? product.description: "Default description"
    const cartPrice  = product ? product.price: "Default"

    const addInCart=()=>{
        addItemToCart(product,()=>
          setRedirect(true)
        )
    }

    const getRedirect=(redirect)=>{
      if(redirect){
        <Navigate to="/cart"/>
      }
    } 

    const showAddToCart=(addtoCart)=>{
        return (
            
            addtoCart && (
              <button
              onClick={addInCart}
              className="btn btn-block btn-outline-success mt-2 mb-2">
              Add to Cart
          </button>)
        )
    }

    const showRemoveFromCart=(removeFromCart)=>{
        return(
            removeFromCart && (<button
              onClick={() => {
                removeItemFromCart(product._id);
                setReload(!reload);
                
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>)
        )
    }

  return (
    <div className="card text-white bg-dark border border-info ">
    <div className="card-header lead">{cartTitle}</div>
    <div className="card-body">
      {getRedirect(redirect)}
      <Image product={product} />
      <p className="lead bg-success font-weight-normal text-wrap">
        {cartDescription}
      </p>
      <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
      <div className="row">
        <div className="col-12">{showAddToCart(addtoCart)}</div>
        <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
      </div>
    </div>
  </div>
  )
      };
  


export default Card
