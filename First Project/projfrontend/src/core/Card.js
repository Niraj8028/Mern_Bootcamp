import React from 'react'
import Image from './helper/Image'

function Card({product, addToCart=true, removeFromCart=false}) {

    const showAddToCart=(addToCart)=>{
        return (
            addToCart && (<button
            onClick={() => {}}
            className="btn btn-block btn-outline-success mt-2 mb-2"
          >
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
              <div className="rounded border border-success p-2">
                <Image product={product}/>
              </div>
              <p className="lead bg-success font-weight-normal text-wrap">
                {product.name}
              </p>
              <p className="lead bg-success font-weight-normal text-wrap">
                {product.description}
              </p>
              <p className="btn btn-success rounded  btn-sm px-4">$ 5</p>
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
