// @ts-nocheck

import {paymentDetails , responseCode , showLoader} from "./paymentStore.js"
import { get, writable } from "svelte/store";
import { goto } from "$app/navigation";
import toast from "svelte-french-toast";
import {cart} from "../cart/cartStore.js"
import {getCart} from "../cart/cartService.js"



export const checkout = async (amount) => {
    
    if (get(responseCode) === '234678') {
      
      paymentDetails.set({
        firstName: "", 
        address:"",
        city: "",
        pin:"",
        phone:"",
        cardNumber: "",
        month: "",
        year: "",
        cvv: "",
      });
    localStorage.removeItem("cartItems")
    cart.set([])
    setTimeout(()=>{
        showLoader.set(true)
    },1000)

    } else {
      toast.error("Payment failed");
    }
};