import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import { addItemToCart } from './helper/AddinCart'
import Image from './helper/Image'

function Card({product, addToCart=true, removeFromCart=false, reload=false, set}) {

    const [redirect, setRedirect] = useState(false)
    const [count, setCount] = useState(product.count);

    const cardTitle  = product ? product.name: "A photo from Pexels"
    const cardDescription  = product ? product.description: "Default description"
    const cardPrice  = product ? product.price: "Default"

    const addInCart=()=>{
        addItemToCart(product,()=>{
          setRedirect(true)
        })
    }

    const getRedirect=(redirect)=>{
      if(redirect){
        <Navigate to="/cart"/>
      }
    } 

    const showAddToCart=(addToCart)=>{
        return (
            
            addToCart && (
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
                onClick={() => {}}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>)
        )
    }

  return (
        <div className='text-center'>
          <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead"></div>
            <div className="card-body">
            {getRedirect(redirect)}

              <div className="rounded border border-success p-2">
                <Image product={product}/>
              </div>
              <p className="lead bg-success font-weight-normal text-wrap">
                {cardTitle}
              </p>
              <p className="lead bg-success font-weight-normal text-wrap">
                {cardDescription}
              </p>
              <p className="btn btn-success rounded  btn-sm px-4">{cardPrice}</p>
              <div className="row">
                <div className="col-12">
                  {showAddToCart(addToCart)}
                </div>
                <div className="col-12">
                  {showRemoveFromCart(removeFromCart)}
                </div>
              </div>
            </div>
          </div>
          </div>
  )
      };
  


export default Card
