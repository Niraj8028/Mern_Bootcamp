import React,{useState,useEffect} from 'react'



function StripeCheckout() {
    const [data, setData] = useState({
        loading:false,
        error:false,
        success:false
    })


  return (
    <div>
      <h3>Checkout</h3>
    </div>
  )
}

export default StripeCheckout
