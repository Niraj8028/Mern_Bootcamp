import { type } from "@testing-library/user-event/dist/type";

export const loadcart=()=>{
    if(typeof window !== undefined){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart"));
        }
    }
}

export const removeFromCart=(productId)=>{
    let cart=[]
    if(typeof window !==undefined){
        if(localStorage.getItem("cart")){
            cart=JSON.getItem(localStorage.getItem("cart"))
        }
        cart.map((product,i)=>{
            if(product._id===productId){
                cart.splice(i,1);
            }
        })
        localStorage.setItem("cart",JSON.stringify("cart"));
    }
    return cart;

}