import React,{useState,useEffect} from "react";
import { getAllProducts } from "../admin/helper/adminapicall";

import "../styles.css"
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";



function Home() {
  const [products, setProducts] = useState([])
  const [errors, setErrors] = useState(false)

  const preload=()=>{
    getProducts().then(data=>{
      if(data.error){
        setErrors(data.error)
      }
      else{
        setProducts(data)
      }
    })
  }

  useEffect(() => {
    preload()
  }, [])
  
  
  return (
    <Base>
        <div className="text-center">
          <h3>All Tshirts</h3>
          <div className="row">
            {products.map((product,index)=>{
              return(
                <div key={index} className="col-4 mb-4">
                            <Card product ={product} />

                        </div>
              )
            })}
          </div>
        </div>
    </Base>
  )
}

export default Home
