import React,{useState,useEffect} from 'react'
import Card from './Card'


function Cart() {
  const [products, setProducts] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    
    //TODO
    
  }, [])
  
 const loadAllProducts=()=>{
  return(
    <div>
      <h2>Load All Products</h2>
      {products.map((product,index)=>{
        <Card 
          key={index}
          product={product}
          removeFromCart={true}
          addToCart={false}
          
        />
      })}
    </div>
  )
 }


  return (
    <div>
      <h3>Cart Page</h3>
    </div>
  )
}

export default Cart
