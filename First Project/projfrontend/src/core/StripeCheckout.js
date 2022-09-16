import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import { loadCart } from './helper/CartHelper'
import StripeCheckoutButton from 'react-stripe-checkout'

function StripeCheckout({products,
                        setReload=f=>f,
                        reload=undefined}) {

    const [data, setData] = useState({
        loading:false,
        error:"",
        success:false,
        address:""
    })
    const token=isAuthenticated() && isAuthenticated().token
    const userId=isAuthenticated() && isAuthenticated().userId

    
    
    
    const getTotal=()=>{
      let amount=0;
      products.map((product)=>{
        amount=amount+product.price
      })
      return amount;
    }
    const makePayment=(token)=>{
      // 
    }

    const showCheckout=()=>{
      return isAuthenticated()?(
        <StripeCheckoutButton
          stripeKey=""
          token={makePayment}
          amount={getTotal()*100} 
          name="Buy Tshirts"
          shippingAddress
          billingAddress
        >
          <button className='btn btn-success'>Pay with Stripe</button>
        </StripeCheckoutButton>
      ):(<Link to="/signin">
          <button className='btn btn-warning'>Signin</button>
        </Link>)
    }


  return (
    <div>
      <h3 className='text-white'>Checkout amount is {getTotal()}</h3>
      {showCheckout()}
      
    </div>
  )
}

export default StripeCheckout
