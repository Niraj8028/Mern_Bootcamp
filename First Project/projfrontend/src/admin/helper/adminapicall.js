import { API } from "../../Backend";

export const createCategory=(userId,token,category)=>{
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(category)

    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}

//can cause error
export const getCategory=(categoryId,userId,token)=>{
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"get",
        Authorization:`Bearer ${token}`
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}
//


export const getAllCategories=()=>{
    return fetch(`${API}/categories`,{
        method:"GET"
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}

export const updateCategory=(categoryId,userId,category,token)=>{
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",         
            Authorization:`Bearer ${token}`
        },
        body:category    
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}
export const removeCategory=(userId,categoryId,token)=>{
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept: "application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}


export const createProduct=(userId,token,product)=>{
    return fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
}

export const updateProduct=(userId,token,productId,product)=>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            
            Authorization:`Bearer ${token}`,
        },
        body:product
    })
    .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
}

export const getProduct=(productId)=>{
    return fetch(`${API}/product/${productId}`,{
        method:"GET",

    })
    .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
}

export const deleteProduct=(userId,productId, token)=>{
    return fetch(`{API}/product/${productId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
}

export const getAllProducts=()=>{
    return  fetch(`${API}/products`,{
        method:"GET",
       
    })
    .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));

}