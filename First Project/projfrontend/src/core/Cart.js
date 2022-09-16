import React,{useState,useEffect} from 'react'
import Card from './Card'
import Base from './Base'
import { loadCart } from './helper/CartHelper'
import StripeCheckout from './StripeCheckout';



const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  let array = Array.from(products);
  const loadAllProducts =() => {
    return (
      <div>
        <h2>This section is to load products</h2>
        {array.map((product, index) =>{return(
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        )})}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2>This section for checkout</h2>
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="col-6">{loadAllProducts()}</div>
        <div className="col-6">
          
          <StripeCheckout products={products} setReload={setReload}/>
        </div>
      </div>
    </Base>
  );
};

export default Cart;