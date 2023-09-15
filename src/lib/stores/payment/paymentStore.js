
import { get, writable } from "svelte/store";
export let showLoader = writable(false)
export let responseCode = writable("234678")
export const paymentDetails = writable({
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