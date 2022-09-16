import React,{useState,useEffect} from 'react'
import { isAuthenticated } from '../auth/helper'
import { loadCart } from './helper/CartHelper'

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

  return (
    <div>
      <h3 className='text-white'>Checkout amount is {getTotal()}</h3>
    </div>
  )
}

export default StripeCheckout
