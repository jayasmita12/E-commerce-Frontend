

import {cart} from "./cartStore.js"
import {toast} from "svelte-french-toast"
import {get , writable} from "svelte/store"
import { quantity } from "./cartStore.js"

export const getCart=()=>{
    cart.set(JSON.parse(localStorage.getItem("cartItems")))
    let data = get(cart)
    return data
}

export const addToCart = (data) =>{
   
    for(let item of get(cart)){
        if(item.id === data.id){
            toast.error("Item aleady added to your cart.")
            return ;
        }
    }
    get(cart).push(data)
    localStorage.setItem("cartItems", JSON.stringify(get(cart)) || [])
    toast.success("Product has beed added to your cart")
    getCart()
}

export const removeItemFromCart=(id)=>{
    let data = get(cart).filter((e)=>e.id !== id)
    localStorage.setItem("cartItems" , JSON.stringify(data))
    getCart()
    console.log(get(cart))
}
