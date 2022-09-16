import React,{useState,useEffect} from 'react'
import Card from './Card'
import Base from './Base'
import { loadCart } from './helper/CartHelper'



function Cart() {
  const [products, setProducts] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    setProducts(loadCart())  
  }, [reload])
  
 const loadAllProducts=()=>{
  return(
    <div>
      <h2>Load All Products</h2>
      {products.map((product,index)=>(
        <Card 
          key={index}
          product={product}
          removeFromCart={true}
          addtoCart={false}
          reload={reload}
          setReload={setReload}
        />
  ))}
    </div>
  )
 }


  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className='row text-center'>
        <div className='col-6'>{loadAllProducts()}</div>
        <div className='col-6'>Load checkout</div>
      </div>
    </Base>
  )
}

export default Cart
